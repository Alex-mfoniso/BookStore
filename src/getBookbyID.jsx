import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message, Card, Spin } from "antd";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const GetBookByID = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBookByID = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${id}`); // Fetch book by ID
      setBook(response.data); // Update state with fetched book
      message.success("Book fetched successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch book. Please check the ID.");
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    const { bookId } = values;
    fetchBookByID(bookId);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Get Book by ID</Title>
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
            Fetch Book
          </Button>
        </Form.Item>
      </Form>

      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        book && (
          <Card style={{ marginTop: 24 }}>
            <p><strong>ID:</strong> {book.id}</p>
            <p><strong>Name:</strong> {book.name}</p>
            <p><strong>Weight:</strong> {book.weight}</p>
          </Card>
        )
      )}
    </div>
  );
};

export default GetBookByID;