import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, message, Spin } from "antd";
import GetBookByID from "../getBookbyID";
import PostBook from "./PostBook";
import UpdBook from "./UpdBook";
import DelBook from "./DelBook";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL); // Fetch books from the API
      setBooks(response.data); // Update state with fetched books
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Book List</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={books}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={`Name: ${item.name}`}
                description={`Weight: ${item.weight}`}
              />
            </List.Item>
          )}
        />
      )}
      <GetBookByID/>
      <PostBook/>
      <UpdBook/>
      <DelBook/>
    </div>
  );
};

export default Book;