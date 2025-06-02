// import { useState } from "react";
// import { Form, Input, Button, Typography, message } from "antd";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { useNavigate } from "react-router-dom";

// const { Title } = Typography;

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async ({ email, password }) => {
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       message.success("Login successful");
//       navigate("/dashboard");
//     } catch (error) {
//       message.error("Login failed. Check credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "100px auto" }}>
//       <Title level={2}>Admin Login</Title>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item name="email" label="Email" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="password" label="Password" rules={[{ required: true }]}>
//           <Input.Password />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" block loading={loading}>
//             Log In
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";

// const Login = () => {
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     const { email, password } = values;
//     setLoading(true);
//     try {
//       const response = await axios.post("https://auth-service-ooqe.onrender.com/auth/login", {
//         email,
//         password,
//       });
//       const token = response.data.token;
//       localStorage.setItem("authToken", token); // Store JWT token in localStorage
//       message.success("Login successful!");
//       console.log("Login Response:", response.data);
//     } catch (error) {
//       console.error("Error during login:", error);
//       message.error(error.response?.data?.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Login</h2>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: "Please enter your email" }]}
//         >
//           <Input type="email" placeholder="Enter your email" />
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
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

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
      message.success("Login successful!");
      console.log("Login Response:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response?.data?.message) {
        message.error(`Error: ${error.response.data.message}`);
      } else if (error.response) {
        message.error(`Error: ${error.response.statusText}`);
      } else {
        message.error("Login failed. Please check your network connection.");
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