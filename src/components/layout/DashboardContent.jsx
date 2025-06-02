// import React, { useState, useEffect } from "react";
// import { Card, Col, Row, Statistic, Typography, Spin, message } from "antd";
// import {
//   TeamOutlined,
//   ShoppingCartOutlined,
//   FileOutlined,
//   BookOutlined,
// } from "@ant-design/icons";
// import axios from "axios";
// import TopReviewedBooksChart from "../charts/TopReviewedBooksChart";
// import GerReviewChart from "../charts/GerReviewChart";
// import BookReviewCoverageChart from "../charts/BookReviewCoverageChart";

// const { Title } = Typography;

// const DashboardContent = () => {
//   const [stats, setStats] = useState({
//     totalBooks: 0,
//     totalAuthors: 0,
//     totalReviews: 0,
//   });
//   const [loading, setLoading] = useState(true);

//   const fetchStats = async () => {
//     try {
//       const response = await axios.get("https://book-composite.onrender.com/api/v1/book-aggregates");
//       const books = response.data;

//       // Calculate statistics
//       const totalBooks = books.length;

//       // Filter books with non-empty recommendations and count unique authors
//       const totalAuthors = new Set(
//         books
//           .filter((book) => book.recommendations.length > 0) // Only consider books with recommendations
//           .flatMap((book) =>
//             book.recommendations.map((recommendation) => recommendation.bookAuthor)
//           )
//       ).size;

//       const totalReviews = books.reduce((acc, book) => acc + book.reviews.length, 0);

//       setStats({
//         totalBooks,
//         totalAuthors,
//         totalReviews,
//       });
//     } catch (error) {
//       console.error("Error fetching dashboard stats:", error);
//       message.error("Failed to load dashboard statistics.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   return (
//     <div
//       style={{
//         marginLeft: 250, // Adjust content to the right to account for the fixed sidebar width
//         marginTop: 24,
//         padding: 24,
//         background: "#fff",
//         borderRadius: 6,
//       }}
//     >
//       <Title level={2}>Dashboard Overview</Title>
//       {loading ? (
//         <Spin style={{ display: "block", margin: "20px auto" }} />
//       ) : (
//         <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
//           <Col xs={24} sm={12} md={8}>
//             <Card hoverable>
//               <Statistic title="Total Books" value={stats.totalBooks} prefix={<BookOutlined />} />
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8}>
//             <Card hoverable>
//               <Statistic title="Total Authors" value={stats.totalAuthors} prefix={<TeamOutlined />} />
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={8}>
//             <Card hoverable>
//               <Statistic title="Total Reviews" value={stats.totalReviews} prefix={<FileOutlined />} />
//             </Card>
//           </Col>
//         </Row>
//       )}
//       <Title level={3} style={{ marginBottom: 16 }}>Recent Activity</Title>
//       <Row gutter={[16, 16]}>
//         <Col xs={24} md={12}>
//           <Card title="Book Review Coverage">
//             <BookReviewCoverageChart />
//           </Card>
//         </Col>
//         <Col xs={24} md={12}>
//           <Card title="Review Distribution">
//             <GerReviewChart />
//           </Card>
//         </Col>
//       </Row>
//       <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
//         <Col xs={24}>
//           <Card title="Top Reviewed Books">
//             <TopReviewedBooksChart />
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default DashboardContent;


import React, { useState, useEffect } from "react";
import { Card, Col, Row, Statistic, Typography, Spin, message } from "antd";
import {
  TeamOutlined,
  FileOutlined,
  BookOutlined,
} from "@ant-design/icons";
import axios from "axios";
import TopReviewedBooksChart from "../charts/TopReviewedBooksChart";
import GerReviewChart from "../charts/GerReviewChart";
import BookReviewCoverageChart from "../charts/BookReviewCoverageChart";

const { Title } = Typography;

const DashboardContent = ({ sidebarWidth }) => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalAuthors: 0,
    totalReviews: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const response = await axios.get("https://book-composite.onrender.com/api/v1/book-aggregates");
      const books = response.data;

      const totalBooks = books.length;
      const totalAuthors = new Set(
        books
          .filter((book) => book.recommendations.length > 0)
          .flatMap((book) =>
            book.recommendations.map((recommendation) => recommendation.bookAuthor)
          )
      ).size;
      const totalReviews = books.reduce((acc, book) => acc + book.reviews.length, 0);

      setStats({
        totalBooks,
        totalAuthors,
        totalReviews,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      message.error("Failed to load dashboard statistics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div
      style={{
        marginLeft: sidebarWidth, // Adjust dynamically based on sidebar width
        transition: "margin-left 0.3s ease", // Smooth transition when sidebar collapses
        marginTop: 24,
        padding: 24,
        background: "#fff",
        borderRadius: 6,
      }}
    >
      <Title level={2}>Dashboard Overview</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Total Books" value={stats.totalBooks} prefix={<BookOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Total Authors" value={stats.totalAuthors} prefix={<TeamOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable>
              <Statistic title="Total Reviews" value={stats.totalReviews} prefix={<FileOutlined />} />
            </Card>
          </Col>
        </Row>
      )}
      <Title level={3} style={{ marginBottom: 16 }}>Recent Activity</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Book Review Coverage">
            <BookReviewCoverageChart />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Review Distribution">
            <GerReviewChart />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24}>
          <Card title="Top Reviewed Books">
            <TopReviewedBooksChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContent;