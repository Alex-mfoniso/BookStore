import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message } from "antd";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const PostBook = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, values, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Book created successfully!");
      console.log("Created Book:", response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to create book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Create a New Book</Title>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Book Name"
          name="name"
          rules={[{ required: true, message: "Please enter the book name" }]}
        >
          <Input placeholder="Enter Book Name" />
        </Form.Item>
        <Form.Item
          label="Weight"
          name="weight"
          rules={[{ required: true, message: "Please enter the book weight" }]}
        >
          <Input placeholder="Enter Book Weight (e.g., 1.2kg)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostBook;