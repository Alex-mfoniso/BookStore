// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { List, Typography, Spin, Select, Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast from React-Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// const { Title } = Typography;
// const { Option } = Select;

// const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";
// const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const GerReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const navigate = useNavigate(); // Initialize navigate

//   const fetchReviews = async (bookId) => {
//     if (!bookId) return;
//     setLoading(true);
//     try {
//       const response = await axios.get(`${REVIEW_BASE_URL}/${bookId}`);
//       setReviews(response.data);
//       toast.success(`Reviews for book ID "${bookId}" fetched successfully!`); // Show success toast
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       toast.error("Failed to fetch reviews. Please try again."); // Show error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(BOOKS_API_URL);
//       const booksData = response.data;
//       setBooks(booksData);
//       toast.success("Books loaded successfully!"); // Show success toast
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       toast.error("Failed to load books. Please try again."); // Show error toast
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleBack = () => {
//     navigate(-1); // Navigate to the previous page
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
//       <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
//         Back
//       </Button>
//       <Title level={3}>
//         {selectedBook
//           ? `Reviews for "${selectedBook.name}" (ID: ${selectedBook.id})`
//           : "Select Book to View Reviews"}
//       </Title>

//       <Select
//         style={{ width: "100%", marginBottom: 24 }}
//         placeholder="Select a book"
//         onChange={(bookId) => {
//           const book = books.find((b) => String(b.id) === String(bookId));
//           if (book) {
//             setSelectedBook(book);
//             fetchReviews(book.id);
//           } else {
//             toast.error("Selected book not found"); // Show error toast
//           }
//         }}
//       >
//         {books.map((book) => (
//           <Option key={book.id} value={book.id}>
//             {book.name}
//           </Option>
//         ))}
//       </Select>

//       {loading ? (
//         <Spin style={{ display: "block", margin: "20px auto" }} />
//       ) : (
//         <List
//           bordered
//           dataSource={reviews}
//           renderItem={(item) => (
//             <List.Item>
//               <List.Item.Meta
//                 title={`Reviewer: ${item.reviewer} (ID: ${item.id})`}
//                 description={`Comment: ${
//                   item.comment || "No comment provided"
//                 }`}
//               />
//             </List.Item>
//           )}
//         />
//       )}
//     </div>
//   );
// };

// export default GerReview;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, Spin, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const { Title } = Typography;
const { Option } = Select;

const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";
const DELETE_REVIEW_URL = "https://review-service-428s.onrender.com/reviews";
const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const GerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const fetchReviews = async (bookId) => {
    if (!bookId) return;
    setLoading(true);
    try {
      const response = await axios.get(`${REVIEW_BASE_URL}/${bookId}`);
      setReviews(response.data);
      toast.success(`Reviews for book ID "${bookId}" fetched successfully!`); // Show success toast
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("Failed to fetch reviews. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(BOOKS_API_URL);
      const booksData = response.data;
      setBooks(booksData);
      toast.success("Books loaded successfully!"); // Show success toast
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("Failed to load books. Please try again."); // Show error toast
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`${DELETE_REVIEW_URL}/${reviewId}`);
      toast.success(`Review with ID ${reviewId} deleted successfully!`);
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId)); // Remove deleted review from state
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Failed to delete review. Please try again.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Button type="default" onClick={handleBack} style={{ marginBottom: 16 }}>
        Back
      </Button>
      <Title level={3}>
        {selectedBook
          ? `Reviews for "${selectedBook.name}" (ID: ${selectedBook.id})`
          : "Select Book to View Reviews"}
      </Title>

      <Select
        style={{ width: "100%", marginBottom: 24 }}
        placeholder="Select a book"
        onChange={(bookId) => {
          const book = books.find((b) => String(b.id) === String(bookId));
          if (book) {
            setSelectedBook(book);
            fetchReviews(book.id);
          } else {
            toast.error("Selected book not found"); // Show error toast
          }
        }}
      >
        {books.map((book) => (
          <Option key={book.id} value={book.id}>
            {book.name}
          </Option>
        ))}
      </Select>

      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="link"
                  danger
                  onClick={() => handleDeleteReview(item.id)} // Delete review
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={`Reviewer: ${item.reviewer} (ID: ${item.id})`}
                description={`Comment: ${
                  item.comment || "No comment provided"
                }`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default GerReview;