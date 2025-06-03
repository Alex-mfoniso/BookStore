// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, Rate, message } from "antd";

// const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

// const AddRecommendation = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(BASE_URL, values, {
//         headers: { "Content-Type": "application/json" },
//       });
//       message.success("Recommendation added successfully!");
//       console.log("Created Recommendation:", response.data);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to add recommendation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Add New Recommendation</h2>
//       <Form
//         layout="vertical"
//         onFinish={onFinish}
//         style={{ marginTop: 24 }}
//       >
//         <Form.Item
//           label="Product ID"
//           name="productId"
//           rules={[{ required: true, message: "Please enter the Product ID" }]}
//         >
//           <Input type="number" placeholder="Enter Product ID" />
//         </Form.Item>

//         <Form.Item
//           label="Book Author"
//           name="bookAuthor"
//           rules={[{ required: true, message: "Please enter the Book Author" }]}
//         >
//           <Input placeholder="Enter Book Author" />
//         </Form.Item>

//         <Form.Item
//           label="Rating"
//           name="rate"
//           rules={[{ required: true, message: "Please provide a rating" }]}
//         >
//           <Rate />
//         </Form.Item>

//         <Form.Item
//           label="Content"
//           name="content"
//           rules={[{ required: true, message: "Please enter your content" }]}
//         >
//           <Input.TextArea rows={4} placeholder="Enter your content" />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AddRecommendation;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

const AddRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL, values, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Recommendation added successfully!"); // Show success toast
      console.log("Created Recommendation:", response.data);
      form.resetFields(); // Clear the form fields
    } catch (error) {
      console.error(error);
      toast.error("Failed to add recommendation. Please try again."); // Show error toast
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
      <h2>Add New Recommendation</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Product ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Product ID" }]}
        >
          <Input type="number" placeholder="Enter Product ID" />
        </Form.Item>

        <Form.Item
          label="Book Author"
          name="bookAuthor"
          rules={[{ required: true, message: "Please enter the Book Author" }]}
        >
          <Input placeholder="Enter Book Author" />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rate"
          rules={[{ required: true, message: "Please provide a rating" }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter your content" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your content" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddRecommendation;