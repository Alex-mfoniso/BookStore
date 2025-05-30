import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";

const BASE_URL = "https://review-service-428s.onrender.com/reviews/1%7C ";

const DelReview = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { reviewId } = values;
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${reviewId}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        message.success(`Review with ID ${reviewId} deleted successfully!`);
        console.log("Deleted Review:", response.data);
      } else {
        message.error("Failed to delete review. Please check the Review ID.");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      message.error(
        error?.response?.data?.message || "Failed to delete review. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <h2>Delete Review</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Review ID"
          name="reviewId"
          rules={[{ required: true, message: "Please enter the Review ID" }]}
        >
          <Input type="number" placeholder="Enter Review ID" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Delete Review
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DelReview;