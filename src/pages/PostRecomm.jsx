import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message } from "antd";

const { Title } = Typography;
const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendation";

const PostRecomm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, values, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Recommendation created successfully!");
      console.log("Created Recommendation:", response.data);
    } catch (error) {
      console.error("Error creating recommendation:", error);
      message.error("Failed to create recommendation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Create a New Recommendation</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Book ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" />
        </Form.Item>
        <Form.Item
          label="Author"
          name="bookAuthor"
          rules={[{ required: true, message: "Please enter the Author's name" }]}
        >
          <Input placeholder="Enter Author's Name" />
        </Form.Item>
        <Form.Item
          label="Rating"
          name="rate"
          rules={[{ required: true, message: "Please enter the rating" }]}
        >
          <Input type="number" placeholder="Enter Rating (e.g., 5)" />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter the recommendation content" }]}
        >
          <Input.TextArea placeholder="Enter Recommendation Content" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Recommendation
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostRecomm;