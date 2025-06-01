import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message } from "antd";

const { Title } = Typography;
const BASE_URL = "https://review-service-428s.onrender.com/reviews";

const PostReview = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, values, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Review created successfully!");
      console.log("Created Review:", response.data);
    } catch (error) {
      console.error("Error creating review:", error);
      message.error("Failed to create review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Create a New Review</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Book ID"
          name="bookId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" />
        </Form.Item>
        <Form.Item
          label="Reviewer Name"
          name="reviewer"
          rules={[{ required: true, message: "Please enter the Reviewer Name" }]}
        >
          <Input placeholder="Enter Reviewer Name" />
        </Form.Item>
        <Form.Item
          label="Comment"
          name="comment"
          rules={[{ required: true, message: "Please enter the review comment" }]}
        >
          <Input.TextArea placeholder="Enter Review Comment" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostReview;