import { useEffect, useState } from "react";
import axios from "axios";
import { List, Input, Button, Form, message, Typography, Spin, Modal } from "antd";

const { Title } = Typography;
const BASE_URL = "https://review-service-428s.onrender.com/reviews";

const MyReview = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editReviewId, setEditReviewId] = useState(null);

  // Fetch all reviews for the book
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/book/${bookId}`);
      setReviews(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
      message.error(error?.response?.data?.message || "Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  // Delete a review by id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      message.success("Review deleted");
      fetchReviews();
    } catch (error) {
      console.error("Delete error:", error);
      message.error(error?.response?.data?.message || "Failed to delete review");
    }
  };

  // Submit a new review
  const onFinish = async (values) => {
    if (!bookId) {
      message.warning("Book ID is missing. Cannot submit review.");
      return;
    }

    try {
      await axios.post(BASE_URL, {
        ...values,
        bookId,
      });
      message.success("Review added");
      form.resetFields();
      fetchReviews();
    } catch (error) {
      console.error("Submit error:", error);
      message.error(error?.response?.data?.message || "Failed to add review");
    }
  };

  // Show edit modal and load review data for editing
  const showEditModal = async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      const review = res.data;
      setEditReviewId(id);
      editForm.setFieldsValue({
        reviewer: review.reviewer,
        content: review.content,
      });
      setEditModalVisible(true);
    } catch (error) {
      console.error("Fetch single review error:", error);
      message.error("Failed to fetch review for editing");
    }
  };

  // Update the review by id
  const handleEditSubmit = async (values) => {
    try {
      await axios.put(`${BASE_URL}/${editReviewId}`, values);
      message.success("Review updated");
      setEditModalVisible(false);
      fetchReviews();
    } catch (error) {
      console.error("Update error:", error);
      message.error("Failed to update review");
    }
  };

  useEffect(() => {
    if (bookId) fetchReviews();
  }, [bookId]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Reviews</Title>

      {/* Add new review form */}
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="reviewer"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          name="content"
          label="Your Review"
          rules={[{ required: true, message: "Please enter your review" }]}
        >
          <Input.TextArea rows={3} placeholder="Write something about this book..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit Review</Button>
        </Form.Item>
      </Form>

      {/* Reviews list */}
      {loading ? (
        <Spin tip="Loading reviews..." />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button key="edit" type="link" onClick={() => showEditModal(item.id)}>Edit</Button>,
                <Button key="delete" type="link" danger onClick={() => handleDelete(item.id)}>Delete</Button>,
              ]}
            >
              <List.Item.Meta title={item.reviewer} description={item.content} />
            </List.Item>
          )}
        />
      )}

      {/* Edit modal */}
      <Modal
        title="Edit Review"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        <Form form={editForm} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item
            name="reviewer"
            label="Your Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Your Review"
            rules={[{ required: true, message: "Please enter your review" }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Update Review
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyReview;
