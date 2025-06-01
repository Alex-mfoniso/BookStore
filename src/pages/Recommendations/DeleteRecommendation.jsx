import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";

const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

const DeleteRecommendation = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { productId } = values;
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`, {
        headers: { "Content-Type": "application/json" },
      });
      message.success("Recommendation deleted successfully!");
      console.log("Deleted Recommendation:", response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to delete recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <h2>Delete Recommendation</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Product ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Product ID" }]}
        >
          <Input type="number" placeholder="Enter Product ID" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Delete Recommendation
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteRecommendation;