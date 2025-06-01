import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, message, Spin, Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";
const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const GerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchReviews = async (bookId) => {
    if (!bookId) return;
    setLoading(true);
    try {
      const response = await axios.get(`${REVIEW_BASE_URL}/${bookId}`);
      setReviews(response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(BOOKS_API_URL);
      const booksData = response.data;
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
      message.error("Failed to load books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
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
            message.error("Selected book not found");
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
            <List.Item>
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { List, Typography, message, Spin, Select } from "antd";

// const { Title } = Typography;
// const { Option } = Select;

// const REVIEW_BASE_URL = "https://review-service-428s.onrender.com/reviews/book";
// const BOOKS_API_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const GerReview = () => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const fetchReviews = async (bookId) => {
//     if (!bookId) return;
//     setLoading(true);
//     try {
//       const response = await axios.get(`${REVIEW_BASE_URL}/${bookId}`);
//       setReviews(response.data);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to fetch reviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get(BOOKS_API_URL);
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       message.error("Failed to load books");
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   useEffect(() => {
//     let intervalId;

//     if (selectedBook) {
//       // Fetch initially
//       fetchReviews(selectedBook.id);

//       // Set interval for polling
//       intervalId = setInterval(() => {
//         fetchReviews(selectedBook.id);
//       }, 10000); // 10 seconds
//     }

//     return () => clearInterval(intervalId);
//   }, [selectedBook]);

//   return (
//     <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
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
//           } else {
//             message.error("Selected book not found");
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

