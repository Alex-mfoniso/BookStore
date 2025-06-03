// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Form, Input, Button, Rate, message } from "antd";
// import { useParams } from "react-router-dom";

// const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

// const UpdateRecommendation = () => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm(); // Ant Design form instance
//   const { id } = useParams(); // Get recommendationId from URL params
//   useEffect(() => {
//     const fetchRecommendation = async () => {
//       setLoading(true);
//       try {
//         console.log("Recommendation ID:", id); // Debug the ID
//         if (!id || isNaN(id)) {
//           message.error("Invalid Recommendation ID.");
//           setLoading(false);
//           return;
//         }
  
//         const response = await axios.get(`${BASE_URL}/${id}`); // Fetch recommendation details
//         console.log("API Response:", response.data); // Debug API response
//         const { productId, bookAuthor, rate, content } = response.data;
//         form.setFieldsValue({
//           recommendationId: id,
//           productId: productId || "",
//           bookAuthor: bookAuthor || "",
//           rate: rate || 0,
//           content: content || "",
//         }); // Pre-fill form
//         message.success("Recommendation details loaded successfully!");
//       } catch (error) {
//         console.error("Error fetching recommendation details:", error);
//         if (error.response) {
//           console.error("Server Response:", error.response.data);
//           message.error(`Failed to load recommendation details: ${error.response.data.message || "Unknown error"}`);
//         } else {
//           message.error("Failed to load recommendation details.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchRecommendation();
//   }, [id, form]);
//   const onFinish = async (values) => {
//     const { recommendationId, productId, bookAuthor, rate, content } = values;
//     setLoading(true);
//     try {
//       const response = await axios.put(`${BASE_URL}/${recommendationId}`, {
//         productId,
//         bookAuthor,
//         rate,
//         content,
//       }, {
//         headers: { "Content-Type": "application/json" },
//       });
//       message.success("Recommendation updated successfully!");
//       console.log("Updated Recommendation:", response.data);
//     } catch (error) {
//       console.error("Error updating recommendation:", error);
//       message.error("Failed to update recommendation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Update Recommendation</h2>
//       <Form
//         form={form} // Bind form instance
//         layout="vertical"
//         onFinish={onFinish}
//         style={{ marginTop: 24 }}
//       >
//         <Form.Item
//           label="Recommendation ID"
//           name="recommendationId"
//           rules={[{ required: true, message: "Please enter the Recommendation ID" }]}
//         >
//           <Input type="number" placeholder="Enter Recommendation ID" disabled />
//         </Form.Item>

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
//             Update Recommendation
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default UpdateRecommendation;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Rate } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

const UpdateRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Ant Design form instance
  const { id } = useParams(); // Get recommendationId from URL params
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchRecommendation = async () => {
      setLoading(true);
      try {
        console.log("Recommendation ID:", id); // Debug the ID
        if (!id || isNaN(id)) {
          toast.error("Invalid Recommendation ID.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${BASE_URL}/${id}`); // Fetch recommendation details
        console.log("API Response:", response.data); // Debug API response
        const { productId, bookAuthor, rate, content } = response.data;
        form.setFieldsValue({
          recommendationId: id,
          productId: productId || "",
          bookAuthor: bookAuthor || "",
          rate: rate || 0,
          content: content || "",
        }); // Pre-fill form
        toast.success("Recommendation details loaded successfully!");
      } catch (error) {
        console.error("Error fetching recommendation details:", error);
        if (error.response) {
          console.error("Server Response:", error.response.data);
          toast.error(`Failed to load recommendation details: ${error.response.data.message || "Unknown error"}`);
        } else {
          toast.error("Failed to load recommendation details.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, [id, form]);

  const onFinish = async (values) => {
    const { recommendationId, productId, bookAuthor, rate, content } = values;
    setLoading(true);
    try {
      const response = await axios.put(
        `${BASE_URL}/${recommendationId}`,
        {
          productId,
          bookAuthor,
          rate,
          content,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Recommendation updated successfully!");
      console.log("Updated Recommendation:", response.data);
      form.resetFields(); // Clear the form fields
    } catch (error) {
      console.error("Error updating recommendation:", error);
      toast.error("Failed to update recommendation.");
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
      <h2>Update Recommendation</h2>
      <Form
        form={form} // Bind form instance
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Recommendation ID"
          name="recommendationId"
          rules={[{ required: true, message: "Please enter the Recommendation ID" }]}
        >
          <Input type="number" placeholder="Enter Recommendation ID" disabled />
        </Form.Item>

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
            Update Recommendation
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateRecommendation;