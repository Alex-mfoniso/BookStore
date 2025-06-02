import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, message, Spin } from "antd";

const { Title } = Typography;
const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

const MainBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL); // Fetch books from the API
      setBooks(response.data); // Update state with fetched books
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Fetch books on component mount
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Book List</Title>
      {loading ? (
        <Spin style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <List
          bordered
          dataSource={books}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={`Name: ${item.name}`}
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { List, Typography, message, Spin } from "antd";

// const { Title } = Typography;
// const BASE_URL = "https://book-service-flbm.onrender.com/api/v1/books";

// const MainBook = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchBooks = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(BASE_URL); // Fetch books from the API
//       setBooks(response.data); // Update state with fetched books
//       message.success("Books fetched successfully!");
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Error: ${error.response.data.message}`);
//       } else {
//         message.error("Failed to fetch books. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks(); // Fetch books on component mount
//   }, []);

//   return (
//     <div style={{ maxWidth: 800, margin: "0 auto", paddingTop: 40 }}>
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
//                 title={`Name: ${item.name}`}
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
