import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Rate, message } from "antd";

const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendation";

const UpdateRecommendation = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { recommendationId, productId, bookAuthor, rate, content } = values;
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/${recommendationId}`, {
        productId,
        bookAuthor,
        rate,
        content,
      }, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Recommendation updated successfully!");
      console.log("Updated Recommendation:", response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to update recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <h2>Update Recommendation</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Recommendation ID"
          name="recommendationId"
          rules={[{ required: true, message: "Please enter the Recommendation ID" }]}
        >
          <Input type="number" placeholder="Enter Recommendation ID" />
        </Form.Item>

        <Form.Item
          label="Product ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Product ID" }]}
        >
          <Input type="number" placeholder="Enter Product ID" />
        </Form.Item>

        <Form.Item
          label="Book Author"
          name="bookAuthor"
          rules={[{ required: true, message: "Please enter the Book Author" }]}
        >
          <Input placeholder="Enter Book Author" />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rate"
          rules={[{ required: true, message: "Please provide a rating" }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter your content" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your content" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Recommendation
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateRecommendation;