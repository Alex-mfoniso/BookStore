// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, Typography, message } from "antd";

// const { Title } = Typography;
// const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const DelBook = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     const { strId } = values; // Accept string ID
//     setLoading(true);
//     try {
//       const response = await axios.delete(`${BASE_URL}/${strId}`, {
//         headers: { "Content-Type": "application/json" },
//       });
//       if (response.status === 200) {
//         message.success(`Book with ID ${strId} deleted successfully!`);
//         console.log("Deleted Book:", response.data);
//       } else {
//         message.error("Failed to delete book. Please check the Book ID.");
//       }
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       message.error(
//         error?.response?.data?.message || "Failed to delete book. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3}>Delete Book</Title>
//       <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 24 }}>
//         <Form.Item
//           label="Book ID (String)"
//           name="strId"
//           rules={[{ required: true, message: "Please enter the Book ID (String)" }]}
//         >
//           <Input placeholder="Enter Book ID (String)" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Delete Book
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default DelBook;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const DelBook = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = async (values) => {
    const { strId } = values; // Accept string ID
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${strId}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        toast.success(`Book with ID "${strId}" deleted successfully!`); // Show success toast
        console.log("Deleted Book:", response.data);
        form.resetFields(); // Clear the form fields
      } else {
        toast.error("Failed to delete book. Please check the Book ID."); // Show error toast
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error(
        error?.response?.data?.message || "Failed to delete book. Please try again."
      ); // Show error toast
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
      <Title level={3}>Delete Book</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Book ID (String)"
          name="strId"
          rules={[{ required: true, message: "Please enter the Book ID (String)" }]}
        >
          <Input placeholder="Enter Book ID (String)" />
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