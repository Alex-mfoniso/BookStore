import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, message, Spin } from "antd";
import { Bar } from "@ant-design/charts";

const { Title } = Typography;

const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";
const REVIEWS_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

const GerReviewChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const booksResponse = await axios.get(BOOKS_API_URL);
      const books = booksResponse.data;

      // Fetch review counts for each book
      const reviewsPromises = books.map((book) =>
        axios
          .get(`${REVIEWS_BASE_URL}/${book.id}`)
          .then((res) => ({
            name: book.name,
            reviewCount: res.data.length || 0,
          }))
          .catch(() => ({
            name: book.name,
            reviewCount: 0,
          }))
      );

      const reviewData = await Promise.all(reviewsPromises);
      setData(reviewData);
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch chart data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    data,
    xField: "name", // Book names on the X-axis
    yField: "reviewCount", // Review counts on the Y-axis
    colorField: "reviewCount",
    color: ({ reviewCount }) => (reviewCount === 0 ? "#ff4d4f" : "#52c41a"),
    label: {
      position: "middle",
      style: {
        fill: "#fff",
        opacity: 0.8,
      },
    },
    height: Math.max(data.length * 50, 400), // Dynamically adjust chart height
    xAxis: {
      title: { text: "Book Title" },
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    yAxis: {
      title: { text: "Number of Reviews" },
    },
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>📊 Reviews per Book (Vertical Chart)</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Bar {...config} />
      )}
    </div>
  );
};

export default GerReviewChart;