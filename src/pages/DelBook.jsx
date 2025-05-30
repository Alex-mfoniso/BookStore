import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message } from "antd";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const DelBook = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { bookId } = values;
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${bookId}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        message.success(`Book with ID ${bookId} deleted successfully!`);
        console.log("Deleted Book:", response.data);
      } else {
        message.error("Failed to delete book. Please check the Book ID.");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      message.error(
        error?.response?.data?.message || "Failed to delete book. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Delete Book</Title>
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
            Delete Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DelBook;