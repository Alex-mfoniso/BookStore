
// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, Typography, Card, List, message, Spin } from "antd";

// const { Title } = Typography;
// const BASE_URL = "https://book-composite.onrender.com/api/v1/book-aggregates";

// const ComId = () => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchBookById = async (id) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/${id}`); // Fetch composite book data by ID
//       setBook(response.data); // Update state with fetched data
//       message.success(`Book data for ID "${id}" fetched successfully!`);
//     } catch (error) {
//       console.error("Error fetching book data:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Error: ${error.response.data.message}`);
//       } else {
//         message.error("Failed to fetch book data. Please check the ID.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onFinish = (values) => {
//     const { bookId } = values;
//     fetchBookById(bookId);
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3}>Get Composite Book Data by ID</Title>
//       <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
//         <Form.Item
//           label="Book ID"
//           name="bookId"
//           rules={[{ required: true, message: "Please enter the Book ID" }]}
//         >
//           <Input type="number" placeholder="Enter Book ID" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Fetch Book Data
//           </Button>
//         </Form.Item>
//       </Form>

//       {loading ? (
//         <Spin style={{ display: "block", margin: "20px auto" }} />
//       ) : (
//         book && (
//           <Card style={{ marginTop: 24 }}>
//             <Title level={4}>{book.name}</Title>
//             <p><strong>Weight:</strong> {book.weight}</p>
//             <p><strong>Recommendations:</strong></p>
//             {book.recommendations.length > 0 ? (
//               <List
//                 dataSource={book.recommendations}
//                 renderItem={(recommendation) => (
//                   <List.Item>
//                     <p>
//                       <strong>Author:</strong> {recommendation.bookAuthor} | 
//                       <strong>Rating:</strong> {recommendation.rate} | 
//                       <strong>Content:</strong> {recommendation.content}
//                     </p>
//                   </List.Item>
//                 )}
//               />
//             ) : (
//               <p>No recommendations available.</p>
//             )}
//             <p><strong>Reviews:</strong></p>
//             {book.reviews.length > 0 ? (
//               <List
//                 dataSource={book.reviews}
//                 renderItem={(review) => (
//                   <List.Item>
//                     <p>
//                       <strong>Reviewer:</strong> {review.reviewer} | 
//                       <strong>Comment:</strong> {review.comment} | 
//                       <strong>Created At:</strong> {new Date(review.createdAt).toLocaleString()}
//                     </p>
//                   </List.Item>
//                 )}
//               />
//             ) : (
//               <p>No reviews available.</p>
//             )}
//           </Card>
//         )
//       )}
//     </div>
//   );
// };

// export default ComId;


import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, Card, List, Spin } from "antd";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const BASE_URL = "https://book-composite.onrender.com/api/v1/book-aggregates";

const Compoid = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBookById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${id}`); // Fetch composite book data by ID
      setBook(response.data); // Update state with fetched data
      toast.success(`Book data for ID "${id}" fetched successfully!`); // Show success toast
    } catch (error) {
      console.error("Error fetching book data:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Error: ${error.response.data.message}`); // Show error toast
      } else {
        toast.error("Failed to fetch book data. Please check the ID."); // Show error toast
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
      <Title level={3}>Get Composite Book Data by ID</Title>
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
        )
      )}
    </div>
  );
};

export default Compoid;