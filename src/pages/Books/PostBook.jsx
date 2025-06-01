// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, Typography, message } from "antd";

// const { Title } = Typography;
// const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const PostBook = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(BASE_URL, values, {
//         headers: { "Content-Type": "application/json" },
//       });
//       message.success("Book created successfully!");
//       console.log("Created Book:", response.data);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to create book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3}>Create a New Book</Title>
//       <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
//         <Form.Item
//           label="Book Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter the book name" }]}
//         >
//           <Input placeholder="Enter Book Name" />
//         </Form.Item>
//         <Form.Item
//           label="Weight"
//           name="weight"
//           rules={[{ required: true, message: "Please enter the book weight" }]}
//         >
//           <Input placeholder="Enter Book Weight (e.g., 1.2kg)" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Create Book
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default PostBook;

import React from "react";
import PostBook from "./PostBook";
import UpdBook from "./UpdBook";
import DelBook from "./DelBook";
import ComId from "./ComId";
import MainBook from "./MainBook";
import { Row, Col, Card, Typography } from "antd";

const { Title } = Typography;

const Book = () => {
  return (
    <div
      style={{
        padding: "24px",
        marginLeft: 250, // Adjust content to the right to account for the fixed sidebar width
        background: "#f0f2f5", // Light background for better contrast
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      <Title level={2} style={{ marginBottom: 24 }}>
        Book Management
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Main Book" bordered>
            <MainBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Composite ID" bordered>
            <ComId />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Add Book" bordered>
            <PostBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Update Book" bordered>
            <UpdBook />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Delete Book" bordered>
            <DelBook />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Book;