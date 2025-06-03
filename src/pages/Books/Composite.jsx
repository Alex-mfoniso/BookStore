import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, Card, message, Spin } from "antd";
import Compoid from "./Compoid";



const { Title } = Typography;
const BASE_URL = "https://book-composite.onrender.com/api/v1/book-aggregates";

const Composite = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCompositeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL); // Fetch composite book data
      setBooks(response.data); // Update state with fetched data
      message.success("Composite book data fetched successfully!");
    } catch (error) {
      console.error("Error fetching composite data:", error);
      message.error(
        error?.response?.data?.message || "Failed to fetch composite book data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompositeData(); // Fetch data on component mount
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Composite Book Data</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={books}
          renderItem={(book) => (
            <List.Item>
              <Card style={{ width: "100%" }}>
                <Title level={4}>{book.name}</Title>
                <p><strong>Weight:</strong> {book.weight}</p>
                <p><strong>Recommendations:</strong></p>
                {book.recommendations.length > 0 ? (
                  <List
                    dataSource={book.recommendations}
                    renderItem={(recommendation) => (
                      <List.Item>
                        <p>
                          <strong>Author:</strong> {recommendation.bookAuthor} | 
                          <strong>Rating:</strong> {recommendation.rate} | 
                          <strong>Content:</strong> {recommendation.content}
                        </p>
                      </List.Item>
                    )}
                  />
                ) : (
                  <p>No recommendations available.</p>
                )}
                <p><strong>Reviews:</strong></p>
                {book.reviews.length > 0 ? (
                  <List
                    dataSource={book.reviews}
                    renderItem={(review) => (
                      <List.Item>
                        <p>
                          <strong>Reviewer:</strong> {review.reviewer} | 
                          <strong>Comment:</strong> {review.comment} | 
                          <strong>Created At:</strong> {new Date(review.createdAt).toLocaleString()}
                        </p>
                      </List.Item>
                    )}
                  />
                ) : (
                  <p>No reviews available.</p>
                )}
              </Card>
            </List.Item>
          )}
        />
      )}
 <Compoid/>
    </div>
  );
};

export default Composite;