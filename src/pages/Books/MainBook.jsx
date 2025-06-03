
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { List, Typography, Spin, Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast from React-Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const { Title } = Typography;
// const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const MainBook = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate

//   const fetchBooks = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(BASE_URL); // Fetch books from the API
//       setBooks(response.data); // Update state with fetched books
//       toast.success("Books fetched successfully!"); // Show success toast
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       toast.error("Failed to fetch books. Please try again."); // Show error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks(); // Fetch books on component mount
//   }, []);

//   const handleBack = () => {
//     navigate(-1); // Navigate to the previous page
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
//       <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
//         Back
//       </Button>
//       <Title level={3}>Book List</Title>
//       {loading ? (
//         <Spin style={{ display: "block", margin: "20px auto" }} />
//       ) : (
//         <List
//           bordered
//           dataSource={books}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 title={`Name: ${item.name} | ID: ${item.id}`} // Display bookId
//                 description={`Weight: ${item.weight}`}
//               />
//             </List.Item>
//           )}
//         />
//       )}
//     </div>
//   );
// };

// export default MainBook;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, Spin, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const MainBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL); // Fetch books from the API
      setBooks(response.data); // Update state with fetched books
      toast.success("Books fetched successfully!"); // Show success toast
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("Failed to fetch books. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`${BASE_URL}/${bookId}`);
      toast.success(`Book with ID ${bookId} deleted successfully!`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId)); // Remove deleted book from state
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book. Please try again.");
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
        Back
      </Button>
      <Title level={3}>Book List</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={books}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  onClick={() => navigate(`/update-book/${item.id}`)} // Navigate to edit page
                >
                  Edit
                </Button>,
                <Button
                  type="link"
                  danger
                  onClick={() => handleDelete(item.id)} // Delete book
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={`Name: ${item.name} | ID: ${item.id}`} // Display bookId
                description={`Weight: ${item.weight}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default MainBook;