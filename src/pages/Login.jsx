// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const { username, password } = values; // Use username and password
//     setLoading(true);
//     try {
//       const response = await axios.post("https://auth-service-0oqe.onrender.com/auth/login", {
//         username,
//         password,
//       });
//       const token = response.data.token;
//       localStorage.setItem("authToken", token);
//       message.success("Login successful!");
//       console.log("Login Response:", response.data);
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error during login:", error);
//       if (error.response?.data?.message) {
//         message.error(`Error: ${error.response.data.message}`);
//       } else if (error.response) {
//         message.error(`Error: ${error.response.statusText}`);
//       } else {
//         message.error("Login failed. Please check your network connection.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Login</h2>
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
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//       <div style={{ textAlign: "center", marginTop: 16 }}>
//         <p>Don't have an account?</p>
//         <Button type="link" onClick={() => navigate("/signup")}>
//           Signup
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values; // Use username and password
    setLoading(true);
    try {
      const response = await axios.post("https://auth-service-0oqe.onrender.com/auth/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      toast.success("Login successful!"); // Show success toast
      console.log("Login Response:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response?.data?.message) {
        toast.error(`Error: ${error.response.data.message}`); // Show error toast
      } else if (error.response) {
        toast.error(`Error: ${error.response.statusText}`); // Show error toast
      } else {
        toast.error("Login failed. Please check your network connection."); // Show error toast
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
      <h2>Login</h2>
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
            Login
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <p>Don't have an account?</p>
        <Button type="link" onClick={() => navigate("/signup")}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Login;