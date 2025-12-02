// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Typography, Spin, message, Empty } from "antd";
// import { Bar } from "@ant-design/charts";

// const { Title } = Typography;

// const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";
// const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

// const TopReviewedBooksChart = () => {
//   const [topBooks, setTopBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchTopBooks = async () => {
//       setLoading(true);
//       try {
//         const { data: books } = await axios.get(BOOKS_API_URL, {
//           signal: controller.signal,
//         });

//         const booksWithCounts = await Promise.all(
//           books.map(async (book) => {
//             try {
//               const res = await axios.get(`${REVIEW_BASE_URL}/${book.id}`);
//               return {
//                 name: book.name,
//                 reviewCount: res.data.length,
//               };
//             } catch {
//               return { name: book.name, reviewCount: 0 };
//             }
//           })
//         );

//         const top5 = booksWithCounts
//           .sort((a, b) => b.reviewCount - a.reviewCount)
//           .slice(0, 5);

//         setTopBooks(top5);
//       } catch (err) {
//         if (axios.isCancel(err)) return;
//         console.error("Fetch error:", err);
//         message.error("Unable to load book review data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTopBooks();

//     return () => controller.abort();
//   }, []);

//   const config = {
//     data: topBooks,
//     xField: "reviewCount",
//     yField: "name",
//     color: ({ reviewCount }) =>
//       reviewCount >= 10 ? "#3f8600" : reviewCount >= 5 ? "#1890ff" : "#f5222d",
//     legend: false,
//     height: 400,
//     label: {
//       position: "right",
//       style: {
//         fill: "#000",
//         fontSize: 12,
//         fontWeight: 500,
//       },
//     },
//     xAxis: {
//       title: {
//         text: "Review Count",
//         style: { fontSize: 13, fontWeight: 600 },
//       },
//     },
//     yAxis: {
//       title: {
//         text: "Book Title",
//         style: { fontSize: 13, fontWeight: 600 },
//       },
//     },
//     tooltip: {
//       formatter: (datum) => ({
//         name: "Reviews",
//         value: datum.reviewCount,
//       }),
//     },
//     interactions: [{ type: "active-region" }],
//   };

//   return (
//     <section
//       style={{
//         maxWidth: 800,
//         margin: "0 auto",
//         padding: "2rem 1rem",
//       }}
//       aria-label="Top Reviewed Books Chart"
//     >
//       <Title level={3} style={{ textAlign: "center" }}>
//         📚 Top 5 Most Reviewed Books
//       </Title>
//       {loading ? (
//         <Spin size="large" style={{ display: "block", margin: "40px auto" }} />
//       ) : topBooks.length ? (
//         <Bar {...config} />
//       ) : (
//         <Empty description="No review data found" />
//       )}
//     </section>
//   );
// };

// export default TopReviewedBooksChart;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Spin, message, Empty } from "antd";
import { Bar } from "@ant-design/charts";

const { Title } = Typography;

const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";
const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";

const TopReviewedBooksChart = () => {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopBooks = async () => {
      setLoading(true);
      try {
        const { data: books } = await axios.get(BOOKS_API_URL, {
          signal: controller.signal,
        });

        const booksWithCounts = await Promise.all(
          books.map(async (book) => {
            try {
              const res = await axios.get(`${REVIEW_BASE_URL}/${book.id}`);
              return {
                name: book.name,
                reviewCount: res.data.length,
              };
            } catch {
              return { name: book.name, reviewCount: 0 };
            }
          })
        );

        const top5 = booksWithCounts
          .sort((a, b) => b.reviewCount - a.reviewCount)
          .slice(0, 5);

        setTopBooks(top5);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error("Fetch error:", err);
        message.error("Unable to load book review data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopBooks();

    return () => controller.abort();
  }, []);

  const config = {
    data: topBooks,
    xField: "reviewCount",
    yField: "name",
    color: ({ reviewCount }) =>
      reviewCount >= 10 ? "#3f8600" : reviewCount >= 5 ? "#1890ff" : "#f5222d",
    legend: false,
    height: Math.max(topBooks.length * 50, 400), // Dynamically adjust chart height
    label: {
      position: "right",
      style: {
        fill: "#000",
        fontSize: 12,
        fontWeight: 500,
      },
    },
    xAxis: {
      title: {
        text: "Review Count",
        style: { fontSize: 13, fontWeight: 600 },
      },
    },
    yAxis: {
      title: {
        text: "Book Title",
        style: { fontSize: 13, fontWeight: 600 },
      },
    },
    tooltip: {
      formatter: (datum) => ({
        name: "Reviews",
        value: datum.reviewCount,
      }),
    },
    interactions: [{ type: "active-region" }],
    responsive: true, // Enable responsiveness
  };

  return (
    <section
      style={{
        maxWidth: "100%", // Allow chart to take full width
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box", // Ensure padding doesn't affect width
      }}
      aria-label="Top Reviewed Books Chart"
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 16 }}>
        Top 5 Most Reviewed Books
      </Title>
      {loading ? (
        <Spin size="large" style={{ display: "block", margin: "40px auto" }} />
      ) : topBooks.length ? (
        <Bar {...config} />
      ) : (
        <Empty description="No review data found" />
      )}
    </section>
  );
};

export default TopReviewedBooksChart;




// Why It's Useful:
// Spotlights your most popular content.

// Encourages more reviews by showing what others are engaging with.

// Makes your dashboard more dynamic and insightful.