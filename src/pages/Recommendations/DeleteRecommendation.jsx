// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";

// const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

// const DeleteRecommendation = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     const { productId } = values;
//     setLoading(true);
//     try {
//       const response = await axios.delete(`${BASE_URL}/${productId}`, {
//         headers: { "Content-Type": "application/json" },
//       });
//       message.success("Recommendation deleted successfully!");
//       console.log("Deleted Recommendation:", response.data);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to delete recommendation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Delete Recommendation</h2>
//       <Form
//         layout="vertical"
//         onFinish={onFinish}
//         style={{ marginTop: 24 }}
//       >
//         <Form.Item
//           label="Book ID"
//           name="productId"
//           rules={[{ required: true, message: "Please enter the Book ID" }]}
//         >
//           <Input type="number" placeholder="Enter Book ID" />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Delete Recommendation
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default DeleteRecommendation;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const BASE_URL =
  // "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";
  " http://4.154.230.175/api/v1/bookrecommendations"
  // "/api/v1/bookrecommendations"

const DeleteRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance
  const navigate = useNavigate(); // Initialize navigate

  const onFinish = async (values) => {
    const { productId } = values;
    setLoading(true);
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Recommendation deleted successfully!"); // Show success toast
      console.log("Deleted Recommendation:", response.data);
      form.resetFields(); // Clear the form fields
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete recommendation. Please try again."); // Show error toast
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
      <h2>Delete Recommendation</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 24 }}
      >
        <Form.Item
          label="Book ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Delete Recommendation
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteRecommendation;
