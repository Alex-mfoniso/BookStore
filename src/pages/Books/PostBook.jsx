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


import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const PostBook = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, values, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Book created successfully!"); // Show success toast
      console.log("Created Book:", response.data);
      form.resetFields(); // Clear the form fields
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("Failed to create book. Please try again."); // Show error toast
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
      <Title level={3}>Create a New Book</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
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
            Create Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PostBook;