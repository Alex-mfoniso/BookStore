import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, message, Spin } from "antd";

const { Title } = Typography;
const BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

const GerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const bookId = 1; // Replace with dynamic book ID if needed

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${bookId}`); // Fetch reviews for a specific book
      setReviews(response.data); // Update state with fetched reviews
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Reviews for Book {bookId}</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={`Reviewer: ${item.reviewer}`}
                description={`Comment: ${item.comment || "No comment provided"}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default GerReview;