// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Form, Input, Button, Typography, message } from "antd";

// // const { Title } = Typography;
// // const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// // const UpdBook = () => {
// //   const [loading, setLoading] = useState(false);

// //   const onFinish = async (values) => {
// //     const { bookId, name, weight } = values;
// //     setLoading(true);
// //     try {
// //       const response = await axios.put(`${BASE_URL}/${bookId}`, { name, weight }, {
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       message.success(`Book with ID ${bookId} updated successfully!`);
// //       console.log("Updated Book:", response.data);
// //     } catch (error) {
// //       console.error(error);
// //       message.error("Failed to update book. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
// //       <Title level={3}>Update Book</Title>
// //       <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
// //         <Form.Item
// //           label="Book ID"
// //           name="bookId"
// //           rules={[{ required: true, message: "Please enter the Book ID" }]}
// //         >
// //           <Input type="number" placeholder="Enter Book ID" />
// //         </Form.Item>
// //         <Form.Item
// //           label="Book Name"
// //           name="name"
// //           rules={[{ required: true, message: "Please enter the book name" }]}
// //         >
// //           <Input placeholder="Enter Book Name" />
// //         </Form.Item>
// //         <Form.Item
// //           label="Weight"
// //           name="weight"
// //           rules={[{ required: true, message: "Please enter the book weight" }]}
// //         >
// //           <Input placeholder="Enter Book Weight (e.g., 1.2kg)" />
// //         </Form.Item>
// //         <Form.Item>
// //           <Button type="primary" htmlType="submit" loading={loading}>
// //             Update Book
// //           </Button>
// //         </Form.Item>
// //       </Form>
// //     </div>
// //   );
// // };

// // export default UpdBook;

// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, Typography } from "antd";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast from React-Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const { Title } = Typography;
// const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const UpdBook = () => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm(); // Create a form instance
//   const navigate = useNavigate(); // Initialize navigate

//   const onFinish = async (values) => {
//     const { bookId, name, weight } = values;
//     setLoading(true);
//     try {
//       const response = await axios.put(
//         `${BASE_URL}/${bookId}`,
//         { name, weight },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(`Book with ID ${bookId} updated successfully!`); // Show success toast
//       console.log("Updated Book:", response.data);
//       form.resetFields(); // Clear the form fields
//     } catch (error) {
//       console.error("Error updating book:", error);
//       toast.error("Failed to update book. Please try again."); // Show error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1); // Navigate to the previous page
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
//         Back
//       </Button>
//       <Title level={3}>Update Book</Title>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         style={{ marginTop: 24 }}
//       >
//         <Form.Item
//           label="Book ID"
//           name="bookId"
//           rules={[{ required: true, message: "Please enter the Book ID" }]}
//         >
//           <Input type="number" placeholder="Enter Book ID" />
//         </Form.Item>
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
//             Update Book
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default UpdBook;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const UpdBook = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance
  const navigate = useNavigate(); // Initialize navigate
  const { id } = useParams(); // Get the book ID from the URL

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/${id}`); // Fetch book details by ID
        const { name, weight } = response.data;
        form.setFieldsValue({ bookId: id, name, weight }); // Pre-fill the form fields
        toast.success("Book details loaded successfully!");
      } catch (error) {
        console.error("Error fetching book details:", error);
        toast.error("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id, form]);

  const onFinish = async (values) => {
    const { bookId, name, weight } = values;
    setLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/${bookId}`,
        { name, weight },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(`Book with ID ${bookId} updated successfully!`);
      form.resetFields(); // Clear the form fields
      navigate("/book"); // Navigate back to the book list
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Failed to update book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
        Back
      </Button>
      <Title level={3}>Update Book</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Book ID"
          name="bookId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" disabled />
        </Form.Item>
        <Form.Item
          label="Book Name"
          name="name"
          rules={[{ required: true, message: "Please enter the book name" }]}
        >
          <Input placeholder="Enter Book Name" />
        </Form.Item>
        <Form.Item
          label="Weight"
          name="weight"
          rules={[{ required: true, message: "Please enter the book weight" }]}
        >
          <Input placeholder="Enter Book Weight (e.g., 1.2kg)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdBook;