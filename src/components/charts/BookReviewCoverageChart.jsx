// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Typography, Spin, message } from "antd";
// import { Pie } from "@ant-design/charts";

// const { Title } = Typography;

// const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";
// const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

// const BookReviewCoverageChart = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const booksResponse = await axios.get(BOOKS_API_URL);
//       const books = booksResponse.data;

//       let withReview = 0;
//       let withoutReview = 0;

//       await Promise.all(
//         books.map(async (book) => {
//           try {
//             const reviewsResponse = await axios.get(`${REVIEW_BASE_URL}/${book.id}`);
//             const reviewCount = reviewsResponse.data.length;
//             if (reviewCount > 0) withReview++;
//             else withoutReview++;
//           } catch {
//             withoutReview++;
//           }
//         })
//       );

//       setData([
//         { type: "With Reviews", value: withReview },
//         { type: "Without Reviews", value: withoutReview },
//       ]);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to load review coverage data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const config = {
//     data,
//     angleField: "value",
//     colorField: "type",
//     radius: 0.9,
//     label: {
//       type: "outer",
//       content: "{name} ({percentage})",
//     },
//     legend: { position: "bottom" },
//     color: ["#52c41a", "#ff4d4f"],
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3}>📊 Book Review Coverage</Title>
//       {loading ? (
//         <Spin style={{ display: "block", margin: "20px auto" }} />
//       ) : (
//         <Pie {...config} />
//       )}
//     </div>
//   );
// };

// export default BookReviewCoverageChart;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Spin, message } from "antd";
import { Pie } from "@ant-design/charts";

const { Title } = Typography;

const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";
const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

const BookReviewCoverageChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const booksResponse = await axios.get(BOOKS_API_URL);
      const books = booksResponse.data;

      let withReview = 0;
      let withoutReview = 0;

      await Promise.all(
        books.map(async (book) => {
          try {
            const reviewsResponse = await axios.get(`${REVIEW_BASE_URL}/${book.id}`);
            const reviewCount = reviewsResponse.data.length;
            if (reviewCount > 0) withReview++;
            else withoutReview++;
          } catch {
            withoutReview++;
          }
        })
      );

      setData([
        { type: "With Reviews", value: withReview },
        { type: "Without Reviews", value: withoutReview },
      ]);
    } catch (error) {
      console.error(error);
      message.error("Failed to load review coverage data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "outer",
      content: "{name} ({percentage})",
    },
    legend: { position: "bottom" },
    color: ["#52c41a", "#ff4d4f"],
    responsive: true, // Enable responsiveness
  };

  return (
    <div
      style={{
        maxWidth: "100%", // Allow chart to take full width
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box", // Ensure padding doesn't affect width
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
        Book Review Coverage
      </Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Pie {...config} />
      )}
    </div>
  );
};

export default BookReviewCoverageChart;
