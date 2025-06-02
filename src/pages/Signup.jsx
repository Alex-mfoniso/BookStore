// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Form, Input, Button, message } from "antd";

// // const Signup = () => {
// //   const [loading, setLoading] = useState(false);

// //   const onFinish = async (values) => {
// //     const { username, email, password } = values;
// //     setLoading(true);
// //     try {
// //       const response = await axios.post("https://auth-service-0oqe.onrender.com/auth/signup", {
// //         username,
// //         email,
// //         password,
// //       });
// //       message.success("Signup successful! Please login.");
// //       console.log("Signup Response:", response.data);
// //     } catch (error) {
// //       console.error("Error during signup:", error);
// //       message.error(error.response?.data?.message || "Signup failed. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
// //       <h2>Signup</h2>
// //       <Form layout="vertical" onFinish={onFinish}>
// //         <Form.Item
// //           label="Username"
// //           name="username"
// //           rules={[{ required: true, message: "Please enter your username" }]}
// //         >
// //           <Input placeholder="Enter your username" />
// //         </Form.Item>
// //         <Form.Item
// //           label="Email"
// //           name="email"
// //           rules={[{ required: true, message: "Please enter your email" }]}
// //         >
// //           <Input type="email" placeholder="Enter your email" />
// //         </Form.Item>
// //         <Form.Item
// //           label="Password"
// //           name="password"
// //           rules={[{ required: true, message: "Please enter your password" }]}
// //         >
// //           <Input.Password placeholder="Enter your password" />
// //         </Form.Item>
// //         <Form.Item>
// //           <Button type="primary" htmlType="submit" loading={loading}>
// //             Signup
// //           </Button>
// //         </Form.Item>
// //       </Form>
// //     </div>
// //   );
// // };

// // export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Hook to navigate between routes

//   const onFinish = async (values) => {
//     const { username, email, password } = values;
//     setLoading(true);
//     try {
//       const response = await axios.post("https://auth-service-0oqe.onrender.com/auth/signup", {
//         username,
//         email,
//         password,
//       });
//       message.success("Signup successful! Please login."); // Display success message
//       console.log("Signup Response:", response.data);
//       navigate("/login"); // Redirect to login page after successful signup
//     } catch (error) {
//       console.error("Error during signup:", error);
//       // Display error message to the user
//       if (error.response?.data?.message) {
//         message.error(`Error: ${error.response.data.message}`);
//       } else {
//         message.error("Signup failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", paddingTop: 40 }}>
//       <h2>Signup</h2>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Please enter your username" }]}
//         >
//           <Input placeholder="Enter your username" />
//         </Form.Item>
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
//             Signup
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

// // export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Input, Button, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Hook to navigate between routes

//   const onFinish = async (values) => {
//     const { username, password } = values; // Removed email field
//     setLoading(true);
//     try {
//       const response = await axios.post("https://auth-service-0oqe.onrender.com/auth/signup", {
//         username,
//         password,
//       });
//       message.success("Signup successful! Please login."); // Display success message
//       console.log("Signup Response:", response.data);
//       navigate("/login"); // Redirect to login page after successful signup
//     } catch (error) {
//       console.error("Error during signup:", error);
//       // Display error message to the user
//       if (error.response?.data?.message) {
//         message.error(`Error: ${error.response.data.message}`);
//       } else {
//         message.error("Signup failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 500, // Increased width
//         margin: "0 auto",
//         padding: "50px 30px", // Increased padding
//         boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)", // Slightly larger shadow
//         borderRadius: "10px", // Increased border radius
//         backgroundColor: "#fff",
//       }}
//     >
//       <h2 style={{ textAlign: "center", color: "#1890ff", marginBottom: 40, fontSize: "24px" }}>Signup</h2> {/* Increased font size */}
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Please enter your username" }]}
//           style={{ marginBottom: 32 }} // Increased spacing between fields
//         >
//           <Input placeholder="Enter your username" style={{ borderRadius: "6px", padding: "12px", fontSize: "16px" }} /> {/* Increased padding and font size */}
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please enter your password" }]}
//           style={{ marginBottom: 32 }} // Increased spacing between fields
//         >
//           <Input.Password placeholder="Enter your password" style={{ borderRadius: "6px", padding: "12px", fontSize: "16px" }} /> {/* Increased padding and font size */}
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             loading={loading}
//             style={{
//               width: "100%",
//               borderRadius: "6px", // Increased border radius
//               backgroundColor: "#1890ff",
//               borderColor: "#1890ff",
//               padding: "12px 0", // Increased padding inside the button
//               fontSize: "18px", // Increased font size
//             }}
//           >
//             Signup
//           </Button>
//         </Form.Item>
//       </Form>
//       <div style={{ textAlign: "center", marginTop: 32 }}> {/* Increased spacing above the footer */}
//         <p style={{ marginBottom: 16, fontSize: "16px", color: "#555" }}>Already have an account?</p> {/* Increased font size */}
//         <Button
//           type="link"
//           onClick={() => navigate("/login")}
//           style={{ color: "#1890ff", fontWeight: "bold", fontSize: "18px" }}
//         >
//           Login
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// filepath: [Signup.jsx](http://_vscodecontentref_/2)
import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

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
      message.success("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response?.data?.message) {
        message.error(`Error: ${error.response.data.message}`); // Fixed string interpolation
      } else if (error.response) {
        message.error(`Error: ${error.response.statusText}`); // Fixed string interpolation
      } else {
        message.error("Signup failed. Please check your network connection.");
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