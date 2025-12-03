

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Rate } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const BASE_URL =
  // "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";
  // " http://4.154.230.175/api/v1/bookrecommendations"
  "/api/v1/bookrecommendations"

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
          toast.error(
            `Failed to load recommendation details: ${
              error.response.data.message || "Unknown error"
            }`
          );
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
          rules={[
            { required: true, message: "Please enter the Recommendation ID" },
          ]}
        >
          <Input type="number" placeholder="Enter Recommendation ID" disabled />
        </Form.Item>

        <Form.Item
          label="Book ID"
          name="productId"
          rules={[{ required: true, message: "Please enter the Book ID" }]}
        >
          <Input type="number" placeholder="Enter Book ID" />
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


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Form, Input, Button, Rate } from "antd";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BASE_URL = "/api/v1/bookrecommendations";

// const UpdateRecommendation = () => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // --- FETCH EXISTING DATA ---
//   useEffect(() => {
//     const fetchRecommendation = async () => {
//       // Use the ID from the URL to fetch data
//       const urlId = id; 
      
//       if (!urlId || isNaN(urlId)) {
//         // If the URL ID is invalid, only show an error and stop loading
//         toast.error("Invalid Recommendation ID in URL. Please enter one manually below.");
//         setLoading(false);
//         // We do NOT return here, allowing the user to manually input the ID below.
//         return; 
//       }
      
//       setLoading(true);

//       try {
//         const response = await axios.get(`${BASE_URL}/${urlId}`);
//         const { productId, bookAuthor, rate, content } = response.data;
        
//         // Pre-fill form with fetched values
//         form.setFieldsValue({
//           recommendationId: urlId, // Pre-fill the editable field
//           productId: productId || "",
//           bookAuthor: bookAuthor || "",
//           rate: rate || 0,
//           content: content || "",
//         });
//         toast.success("Recommendation details loaded successfully!");
//       } catch (error) {
//         console.error("Error fetching recommendation details:", error);
//         toast.error("Failed to load recommendation details. Please input the ID manually.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecommendation();
//   }, [id, form]);

//   // --- SUBMIT UPDATED DATA ---
//   const onFinish = async (values) => {
//     const { recommendationId, productId, bookAuthor, rate, content } = values;
//     setLoading(true);
    
//     // Ensure the ID entered in the form is valid
//     const numericId = Number(recommendationId); 
//     if (isNaN(numericId) || !numericId) {
//       toast.error("Update failed: Please provide a valid Recommendation ID.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // PUT request using the ID entered/pre-filled in the form
//       const response = await axios.put(
//         `${BASE_URL}/${numericId}`, 
//         { productId, bookAuthor, rate, content },
//         { headers: { "Content-Type": "application/json" } }
//       );
      
//       toast.success("Recommendation updated successfully!");
//       console.log("Updated Recommendation:", response.data);
//       // Removed form.resetFields() as it's an update page, usually you keep the data
      
//     } catch (error) {
//       console.error("Error updating recommendation:", error);
//       toast.error("Failed to update recommendation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
//         Back
//       </Button>
//       <h2>Update Recommendation</h2>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         style={{ marginTop: 24 }}
//       >
//         <Form.Item
//           label="Recommendation ID"
//           name="recommendationId"
//           rules={[
//             { required: true, message: "Please enter the Recommendation ID" },
//           ]}
//         >
//           {/* *** MODIFICATION HERE: 'disabled' prop REMOVED ***
//             This allows manual input for the Recommendation ID.
//           */}
//           <Input type="number" placeholder="Enter Recommendation ID" />
//         </Form.Item>

//         <Form.Item
//           label="Book ID"
//           name="productId"
//           rules={[{ required: true, message: "Please enter the Book ID" }]}
//         >
//           <Input type="number" placeholder="Enter Book ID" />
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