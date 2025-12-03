import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Typography, Spin, message } from "antd";

const { Title } = Typography;

const TopReviewers = () => {
  const [reviewers, setReviewers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTopReviewers = async () => {
    setLoading(true);
    try {
      // const response = await axios.get("https://review-service-428s.onrender.com/reviews");
      const response = await axios.get("http://9.169.178.97:8080/reviews");
      const reviews = response.data;

      const reviewerCounts = reviews.reduce((acc, review) => {
        acc[review.reviewer] = (acc[review.reviewer] || 0) + 1;
        return acc;
      }, {});

      const sortedReviewers = Object.entries(reviewerCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // Top 10 reviewers

      setReviewers(sortedReviewers);
    } catch (error) {
      console.error("Error fetching top reviewers:", error);
      message.error("Failed to load top reviewers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopReviewers();
  }, []);

  return (
    <div style={{ marginBottom: 40 }}>
      <Title level={4}>📊 Top Reviewers Leaderboard</Title>
      {loading ? (
        <Spin />
      ) : (
        <Table
          dataSource={reviewers}
          columns={[
            { title: "Reviewer", dataIndex: "name", key: "name" },
            { title: "Reviews", dataIndex: "count", key: "count" },
          ]}
          rowKey="name"
          pagination={false}
        />
      )}
    </div>
  );
};

export default TopReviewers;
