import { useEffect, useState } from "react";
import axios from "axios";
import { List, Input, Button, Form, Typography, message, Modal } from "antd";

const { Title } = Typography; 
const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";
const SINGLE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendation";
const HEADERS = { "Content-Type": "application/json" };

const BookRecommendation = ({ productId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editItem, setEditItem] = useState(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/${productId}`, { headers: HEADERS });
      setRecommendations(res.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch recommendations");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (values) => {
    try {
      await axios.post(
        SINGLE_URL,
        { ...values, productId: parseInt(productId) },
        { headers: HEADERS }
      );
      message.success("Recommendation added");
      form.resetFields();
      fetchRecommendations();
    } catch (error) {
      console.error(error);
      message.error("Failed to add recommendation");
    }
  };

  const handleDelete = async (recommendationId) => {
    try {
      await axios.delete(`${SINGLE_URL}/${recommendationId}`, { headers: HEADERS });
      message.success("Recommendation deleted");
      fetchRecommendations();
    } catch (error) {
      console.error(error);
      message.error("Failed to delete recommendation");
    }
  };

  const handleUpdate = async (values) => {
    try {
      await axios.put(
        `${SINGLE_URL}/${editItem.recommendationId}`,
        { ...editItem, ...values },
        { headers: HEADERS }
      );
      message.success("Recommendation updated");
      setEditItem(null);
      fetchRecommendations();
    } catch (error) {
      console.error(error);
      message.error("Failed to update recommendation");
    }
  };

  useEffect(() => {
    if (productId) fetchRecommendations();
  }, [productId]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Book Recommendations</Title>

      <Form form={form} layout="vertical" onFinish={handleAdd}>
        <Form.Item name="bookAuthor" label="Book Author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="rate" label="Rating (1-5)" rules={[{ required: true }]}>
          <Input type="number" min={1} max={5} />
        </Form.Item>
        <Form.Item name="content" label="Your Comment" rules={[{ required: true }]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Recommendation
        </Button>
      </Form>

      <List
        style={{ marginTop: 32 }}
        loading={loading}
        bordered
        dataSource={recommendations}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => setEditItem(item)} type="link">
                Edit
              </Button>,
              <Button
                onClick={() => handleDelete(item.recommendationId)}
                type="link"
                danger
              >
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={`${item.bookAuthor} (Rating: ${item.rate})`}
              description={item.content}
            />
          </List.Item>
        )}
      />

      {editItem && (
        <Modal
          title="Edit Recommendation"
          open={!!editItem}
          onCancel={() => setEditItem(null)}
          footer={null}
        >
          <Form
            layout="vertical"
            initialValues={{
              bookAuthor: editItem.bookAuthor,
              rate: editItem.rate,
              content: editItem.content,
            }}
            onFinish={handleUpdate}
          >
            <Form.Item name="bookAuthor" label="Book Author" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="rate" label="Rating" rules={[{ required: true }]}>
              <Input type="number" min={1} max={5} />
            </Form.Item>
            <Form.Item name="content" label="Updated Comment" rules={[{ required: true }]}>
              <Input.TextArea rows={2} />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update
            </Button>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default BookRecommendation;
