// import React, { useState } from "react";
// import GerReview from "./GerReview";
// import DelReview from "./DelReview";
// import PostReview from "./PostReview";
// import { Button, Typography } from "antd";

// const { Title } = Typography;

// const MyReview = () => {
//   const [activeComponent, setActiveComponent] = useState(null); // State to track active component

//   return (
//     <div style={{ maxWidth: 350, margin: "0 auto", paddingTop: 40 }}>
//       <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
//         My Reviews
//       </Title>
//       <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginBottom: 24 }}>
//         <Button type="primary" onClick={() => setActiveComponent("PostReview")}>
//           Add Review
//         </Button>
//         <Button type="primary" onClick={() => setActiveComponent("GerReview")}>
//           Get Reviews
//         </Button>
//         <Button type="primary" danger onClick={() => setActiveComponent("DelReview")}>
//           Delete Review
//         </Button>
//       </div>

//       {/* Render the active component */}
//       {activeComponent === "PostReview" && <PostReview />}
//       {activeComponent === "GerReview" && <GerReview />}
//       {activeComponent === "DelReview" && <DelReview />}
//     </div>
//   );
// };

// export default MyReview;

import React, { useState } from "react";
import GerReview from "./GerReview";
import DelReview from "./DelReview";
import PostReview from "./PostReview";
import { Button, Typography } from "antd";

const { Title } = Typography;

const MyReview = ({ sidebarWidth }) => {
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
        My Reviews
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
        <Button type="primary" onClick={() => setActiveComponent("PostReview")}>
          Add Review
        </Button>
        <Button type="primary" onClick={() => setActiveComponent("GerReview")}>
          Get Reviews
        </Button>
        <Button type="primary" danger onClick={() => setActiveComponent("DelReview")}>
          Delete Review
        </Button>
      </div>

      {/* Render the active component */}
      <div style={{ marginTop: 24 }}>
        {activeComponent === "PostReview" && <PostReview />}
        {activeComponent === "GerReview" && <GerReview />}
        {activeComponent === "DelReview" && <DelReview />}
      </div>
    </div>
  );
};

export default MyReview;