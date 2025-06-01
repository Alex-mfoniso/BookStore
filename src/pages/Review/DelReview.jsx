import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import Delrevid from "./Delrevid";

const BASE_URL = "https://review-service-428s.onrender.com/reviews";

const DelReview = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { reviewId } = values;
    setLoading(true);
    try {
      console.log(`Sending DELETE request for Review ID: ${reviewId}`);
      const response = await axios.delete(`${BASE_URL}/${reviewId}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response);
      if (response.status === 200) {
        message.success(`Review with ID ${reviewId} deleted successfully!`);
      } else {
        message.error("Failed to delete review. Please check the Review ID.");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      const errorMessage =
        error?.response?.data?.message || "Failed to delete review. Please try again.";
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <h2>Delete Review</h2>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Review ID"
          name="reviewId"
          rules={[{ required: true, message: "Please enter the Review ID" }]}
        >
          <Input placeholder="Enter Review ID" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Delete Review
          </Button>
        </Form.Item>
      </Form>

      {/* <Delrevid/> */}
    </div>
  );
};

export default DelReview;


