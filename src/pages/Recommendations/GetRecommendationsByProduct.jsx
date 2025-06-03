

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, List, Typography, message } from "antd";

const { Title } = Typography;
const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

const GetRecommendationsByProduct = () => {
  const [productId, setProductId] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendationsByProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/${productId}`, {
        headers: { "Content-Type": "application/json" },
      });
      setRecommendations(res.data);
      message.success("Recommendations fetched successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch recommendations");
    } finally {
      setLoading(false);
    }
  };

  const onFinish = () => {
    if (!productId) {
      message.error("Please enter a Product ID");
      return;
    }
    fetchRecommendationsByProduct();
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Get Recommendations by Product ID</Title>

      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Product ID"
          rules={[{ required: true, message: "Please enter the Product ID" }]}
        >
          <Input
            type="number"
            placeholder="Enter Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Fetch Recommendations
          </Button>
        </Form.Item>
      </Form>

      <List
        style={{ marginTop: 32 }}
        loading={loading}
        bordered
        dataSource={recommendations}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`Recommendation ID: ${item.recommendationId} | ${item.bookAuthor} (Rating: ${item.rate})`}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default GetRecommendationsByProduct;