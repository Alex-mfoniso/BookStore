import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";

const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const Delrevid = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { bookId } = values;
    setLoading(true);
    try {
      console.log(`Sending DELETE request for Book ID: ${bookId}`);
      const response = await axios.delete(`${BASE_URL}/book/${bookId}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response:", response);
      if (response.status === 200) {
        message.success(`Reviews for Book ID ${bookId} deleted successfully!`);
      } else {
        message.error("Failed to delete reviews. Please check the Book ID.");
      }
    } catch (error) {
      console.error("Error deleting reviews:", error);
      const errorMessage =
        error?.response?.data?.message || "Failed to delete reviews. Please try again.";
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <h2>Delete Reviews by Book ID</h2>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
        <Form.Item
          label="Book ID"
          name="bookId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Delete Reviews
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Delrevid;
