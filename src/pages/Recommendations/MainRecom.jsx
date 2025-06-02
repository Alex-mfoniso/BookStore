import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Button, Typography, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const BASE_URL = "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";

const MainRecom = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL); // Fetch recommendations from the API
      setRecommendations(response.data); // Update state with fetched recommendations
      message.success("Recommendations fetched successfully!");
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      message.error("Failed to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecommendation = async (id) => {
    console.log("Deleting Recommendation ID:", id); // Debug the ID
    try {
      await axios.delete(`${BASE_URL}/${id}`); // Delete recommendation by ID
      message.success(`Recommendation with ID ${id} deleted successfully!`);
      fetchRecommendations(); // Refresh the list
    } catch (error) {
      console.error("Error deleting recommendation:", error);
      message.error("Failed to delete recommendation. Please try again.");
    }
  };

  useEffect(() => {
    fetchRecommendations(); // Fetch recommendations on component mount
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Recommendations</Title>
      <Button
        type="primary"
        style={{ marginBottom: 24 }}
        onClick={() => navigate("/add-recommendation")} // Navigate to AddRecommendation
      >
        Add Recommendation
      </Button>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={recommendations}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  onClick={() => navigate(`/UpdateRecommendations/${item.recommendationId}`)} // Use correct field name
                >
                  Edit
                </Button>,
                <Button
                  type="link"
                  danger
                  onClick={() => deleteRecommendation(item.recommendationId)} // Use correct field name
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={`Author: ${item.bookAuthor} | Rating: ${item.rate}`}
                description={item.content}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default MainRecom;