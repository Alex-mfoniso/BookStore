import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async ({ email, password }) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      message.error("Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <Title level={2}>Admin Login</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
