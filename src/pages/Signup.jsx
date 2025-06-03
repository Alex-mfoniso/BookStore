
// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const { username, password } = values;
//     setLoading(true);
//     try {
//       await axios.post("https://auth-service-0oqe.onrender.com/auth/signup", {
//         username,
//         password,
//       });
//       message.success("Signup successful! Please login.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Error during signup:", error);
//       if (error.response?.data?.message) {
//         message.error(`Error: ${error.response.data.message}`); // Fixed string interpolation
//       } else if (error.response) {
//         message.error(`Error: ${error.response.statusText}`); // Fixed string interpolation
//       } else {
//         message.error("Signup failed. Please check your network connection.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Sign Up</h2>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Please enter your username" }]}
//         >
//           <Input placeholder="Enter your username" />
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please enter your password" }]}
//         >
//           <Input.Password placeholder="Enter your password" />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Sign Up
//           </Button>
//         </Form.Item>
//       </Form>
//       <div style={{ textAlign: "center", marginTop: 16 }}>
//         <p>Already have an account?</p>
//         <Button type="link" onClick={() => navigate("/login")}>
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    setLoading(true);
    try {
      await axios.post("https://auth-service-0oqe.onrender.com/auth/signup", {
        username,
        password,
      });
      toast.success("Signup successful! Please login."); // Show success toast
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response?.data?.message) {
        toast.error(`Error: ${error.response.data.message}`); // Show error toast
      } else if (error.response) {
        toast.error(`Error: ${error.response.statusText}`); // Show error toast
      } else {
        toast.error("Signup failed. Please check your network connection."); // Show error toast
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
      <h2>Sign Up</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <p>Already have an account?</p>
        <Button type="link" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Signup;