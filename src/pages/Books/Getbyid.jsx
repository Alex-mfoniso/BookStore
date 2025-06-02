import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, Card, message, Spin } from "antd";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const Getbyid = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBookById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${id}`); // Fetch book data by ID
      setBook(response.data); // Update state with fetched data
      message.success(`Book data for ID "${id}" fetched successfully!`);
    } catch (error) {
      console.error("Error fetching book data:", error);
      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Error: ${error.response.data.message}`);
      } else {
        message.error("Failed to fetch book data. Please check the ID.");
      }
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    const { bookId } = values;
    fetchBookById(bookId);
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Get Book Data by ID</Title>
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
            Fetch Book Data
          </Button>
        </Form.Item>
      </Form>

      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        book && (
          <Card style={{ marginTop: 24 }}>
            <Title level={4}>{book.name}</Title>
            <p><strong>Weight:</strong> {book.weight}</p>
          </Card>
        )
      )}
    </div>
  );
};

export default Getbyid;