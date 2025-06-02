// import React, { useState } from "react";
// import MainRecom from "./MainRecom";
// import GetRecommendationsByProduct from "./GetRecommendationsByProduct";
// import UpdateRecommendation from "./UpdateRecommendation";
// import DeleteRecommendation from "./DeleteRecommendation";
// import { Button, Typography } from "antd";

// const { Title } = Typography;

// const BookRecommendation = () => {
//   const [activeComponent, setActiveComponent] = useState(null); // State to track active component

//   return (
//     <div style={{ maxWidth: 980, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
//         Book Recommendations
//       </Title>
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: 24 }}>
//         <Button type="primary" onClick={() => setActiveComponent("MainRecom")}>
//           View Recommendations
//         </Button>
//         <Button type="primary" onClick={() => setActiveComponent("GetRecommendationsByProduct")}>
//           Get Recommendations by Product
//         </Button>
//         <Button type="primary" onClick={() => setActiveComponent("UpdateRecommendation")}>
//           Update Recommendation
//         </Button>
//         <Button type="primary" danger onClick={() => setActiveComponent("DeleteRecommendation")}>
//           Delete Recommendation
//         </Button>
//       </div>

//       {/* Render the active component */}
//       {activeComponent === "MainRecom" && <MainRecom />}
//       {activeComponent === "GetRecommendationsByProduct" && <GetRecommendationsByProduct />}
//       {activeComponent === "UpdateRecommendation" && <UpdateRecommendation />}
//       {activeComponent === "DeleteRecommendation" && <DeleteRecommendation />}
//     </div>
//   );
// };

// export default BookRecommendation;

import React, { useState } from "react";
import MainRecom from "./MainRecom";
import GetRecommendationsByProduct from "./GetRecommendationsByProduct";
import UpdateRecommendation from "./UpdateRecommendation";
import DeleteRecommendation from "./DeleteRecommendation";
import { Button, Typography } from "antd";

const { Title } = Typography;

const BookRecommendation = ({ sidebarWidth }) => {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active component

  return (
    <div
      style={{
        marginLeft: sidebarWidth, // Adjust content based on sidebar width
        transition: "margin-left 0.3s ease", // Smooth transition when sidebar collapses
        padding: "40px 20px",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Book Recommendations
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center buttons for responsiveness
          flexWrap: "wrap", // Allow buttons to wrap on smaller screens
          gap: "10px",
          marginBottom: 24,
        }}
      >
        <Button type="primary" onClick={() => setActiveComponent("MainRecom")}>
          View Recommendations
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("GetRecommendationsByProduct")}>
          Get Recommendations by Product
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("UpdateRecommendation")}>
          Update Recommendation
        </Button>
        <Button type="primary" danger onClick={() => setActiveComponent("DeleteRecommendation")}>
          Delete Recommendation
        </Button>
      </div>

      {/* Render the active component */}
      <div style={{ marginTop: 24 }}>
        {activeComponent === "MainRecom" && <MainRecom />}
        {activeComponent === "GetRecommendationsByProduct" && <GetRecommendationsByProduct />}
        {activeComponent === "UpdateRecommendation" && <UpdateRecommendation />}
        {activeComponent === "DeleteRecommendation" && <DeleteRecommendation />}
      </div>
    </div>
  );
};

export default BookRecommendation;