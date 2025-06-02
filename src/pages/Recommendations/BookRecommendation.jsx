// import { useEffect, useState } from "react";
// import axios from "axios";
// import { List, Typography, message } from "antd";
// import AddRecommendation from "./AddRecommendation";
// import GetRecommendationsByProduct from "./GetRecommendationsByProduct";
// import UpdateRecommendation from "./UpdateRecommendation";
// import DeleteRecommendation from "./DeleteRecommendation";

// const { Title } = Typography;
// const BASE_URL =
//   "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";
// const HEADERS = { "Content-Type": "application/json" };

// const BookRecommendation = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(BASE_URL, { headers: HEADERS }); // Fetch all recommendations
//       setRecommendations(res.data);
//     } catch (error) {
//       console.error(error);
//       message.error("Failed to fetch recommendations");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRecommendations(); // Fetch recommendations on component mount
//   }, []);

//   return (
//     <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3}>Book Recommendations</Title>

//       <List
//         style={{ marginTop: 32 }}
//         loading={loading}
//         bordered
//         dataSource={recommendations}
//         renderItem={(item) => (
//           <List.Item>
//             <List.Item.Meta
//               title={`${item.bookAuthor} (Rating: ${item.rate})`}
//               description={item.content}
//             />
//           </List.Item>
//         )}
//       />
     
//       {/* <AddRecommendation/> */}
//       <GetRecommendationsByProduct />
//       <UpdateRecommendation />
//       <DeleteRecommendation />
      
//     </div>
//   );
// };

// export default BookRecommendation;


import { useEffect, useState } from "react";
import axios from "axios";
import { List, Typography, message } from "antd";
import AddRecommendation from "./AddRecommendation";
import GetRecommendationsByProduct from "./GetRecommendationsByProduct";
import UpdateRecommendation from "./UpdateRecommendation";
import DeleteRecommendation from "./DeleteRecommendation";
import MainRecom from "./MainRecom";

const { Title } = Typography;
const BASE_URL =
  "https://recommendationservice-3oal.onrender.com/api/v1/bookrecommendations";
const HEADERS = { "Content-Type": "application/json" };

const BookRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BASE_URL, { headers: HEADERS }); // Fetch all recommendations
      setRecommendations(res.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch recommendations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations(); // Fetch recommendations on component mount
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", paddingTop: 40 }}>
      <Title level={3}>Book Recommendations</Title>

      <List
        style={{ marginTop: 32 }}
        loading={loading}
        bordered
        dataSource={recommendations}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`Recommendation ID: ${item.recommendationId} | ${item.bookAuthor} (Rating: ${item.rate})`}
              description={item.content}
            />
          </List.Item>
        )}
      />

      {/* Additional Components */}
      {/* <AddRecommendation/> */}
      <MainRecom/>
      {/* <GetRecommendationsByProduct /> */}
      {/* <UpdateRecommendation /> */}
      {/* <DeleteRecommendation /> */}
    </div>
  );
};

export default BookRecommendation;