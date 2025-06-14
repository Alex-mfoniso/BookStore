// import React, { useState } from "react";
// import { Layout, Menu, Typography } from "antd";
// import {
//   DashboardOutlined,
//   BookOutlined,
//   StarOutlined,
//   LikeOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   FileOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const { Sider } = Layout;
// const { Title } = Typography;

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false); // State to manage collapse
//   const navigate = useNavigate();

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       onCollapse={(value) => setCollapsed(value)} // Update collapse state
//       width={250}
//       style={{
//         background: "#fff",
//         paddingTop: 12,
//         position: "fixed", // Fix the sidebar position
//         height: "100vh", // Ensure it spans the full viewport height
//         overflow: "hidden", // Disable scrolling within the sidebar
//         zIndex: 1000, // Ensure it stays above other content
//       }}
//     >
//       <div style={{ height: 64, display: "flex", justifyContent: "center", alignItems: "center" }}>
//         {!collapsed ? (
//           <Title level={4} style={{ color: "#1890ff", margin: 0 }}>
//             My Dashboard
//           </Title>
//         ) : (
//           <DashboardOutlined style={{ fontSize: 28, color: "#1890ff" }} />
//         )}
//       </div>
//       <Menu defaultSelectedKeys={["1"]} mode="inline">
//         <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => navigate("/dasboard")}>Dashboard</Menu.Item>
//         <Menu.Item key="2" icon={<BookOutlined />} onClick={() => navigate("/book")}>Books</Menu.Item>
//         <Menu.Item key="3" icon={<StarOutlined />} onClick={() => navigate("/review")}>Reviews</Menu.Item>
//         <Menu.Item key="4" icon={<LikeOutlined />} onClick={() => navigate("/recommendation")}>Recommendations</Menu.Item>
//         <Menu.Item key="5" icon={<AppstoreOutlined />} onClick={() => navigate("/composite")}>Composite</Menu.Item>
//         <Menu.Item key="6" icon={<TeamOutlined />}>Users</Menu.Item>
//         <Menu.Item key="7" icon={<FileOutlined />}>Reports</Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Layout, Menu, Typography } from "antd";
// import {
//   DashboardOutlined,
//   BookOutlined,
//   StarOutlined,
//   LikeOutlined,
//   AppstoreOutlined,
//   TeamOutlined,
//   FileOutlined,
// } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";

// const { Sider } = Layout;
// const { Title } = Typography;

// const Sidebar = ({ onCollapse }) => {
//   const [collapsed, setCollapsed] = useState(false); // State to manage collapse
//   const navigate = useNavigate();

//   const handleCollapse = (value) => {
//     setCollapsed(value);
//     onCollapse(value); // Notify parent component about collapse state
//   };

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       onCollapse={handleCollapse} // Update collapse state
//       width={250}
//       style={{
//         background: "#fff",
//         paddingTop: 12,
//         position: "fixed", // Fix the sidebar position
//         height: "100vh", // Ensure it spans the full viewport height
//         overflow: "hidden", // Disable scrolling within the sidebar
//         zIndex: 1000, // Ensure it stays above other content
//       }}
//     >
//       <div style={{ height: 64, display: "flex", justifyContent: "center", alignItems: "center" }}>
//         {!collapsed ? (
//           <Title level={4} style={{ color: "#1890ff", margin: 0 }}>
//             My Dashboard
//           </Title>
//         ) : (
//           <DashboardOutlined style={{ fontSize: 28, color: "#1890ff" }} />
//         )}
//       </div>
//       <Menu defaultSelectedKeys={["1"]} mode="inline">
//         <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => navigate("/dashboard")}>
//           Dashboard
//         </Menu.Item>
//         <Menu.Item key="2" icon={<BookOutlined />} onClick={() => navigate("/book")}>
//           Books
//         </Menu.Item>
//         <Menu.Item key="3" icon={<StarOutlined />} onClick={() => navigate("/review")}>
//           Reviews
//         </Menu.Item>
//         <Menu.Item key="4" icon={<LikeOutlined />} onClick={() => navigate("/recommendation")}>
//           Recommendations
//         </Menu.Item>
//         <Menu.Item key="5" icon={<AppstoreOutlined />} onClick={() => navigate("/composite")}>
//           Composite
//         </Menu.Item>
//         <Menu.Item key="6" icon={<TeamOutlined />}>
//           Users
//         </Menu.Item>
//         <Menu.Item key="7" icon={<FileOutlined />}>
//           Reports
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { Layout, Menu, Typography } from "antd";
import {
  DashboardOutlined,
  BookOutlined,
  StarOutlined,
  LikeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

const Sidebar = ({ onCollapse }) => {
  const [collapsed, setCollapsed] = useState(false); // State to manage collapse
  const navigate = useNavigate();

  const handleCollapse = (value) => {
    setCollapsed(value);
    onCollapse(value ? 80 : 250); // Notify parent component about sidebar width
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse} // Update collapse state
      width={250}
      style={{
        background: "#fff",
        paddingTop: 12,
        position: "fixed", // Fix the sidebar position
        height: "100vh", // Ensure it spans the full viewport height
        overflow: "hidden", // Disable scrolling within the sidebar
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <div style={{ height: 64, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {!collapsed ? (
          <Title level={4} style={{ color: "#1890ff", margin: 0 }}>
            My Dashboard
          </Title>
        ) : (
          <DashboardOutlined style={{ fontSize: 28, color: "#1890ff" }} />
        )}
      </div>
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => navigate("/dashboard")}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<BookOutlined />} onClick={() => navigate("/book")}>
          Books
        </Menu.Item>
        <Menu.Item key="3" icon={<StarOutlined />} onClick={() => navigate("/review")}>
          Reviews
        </Menu.Item>
        <Menu.Item key="4" icon={<LikeOutlined />} onClick={() => navigate("/recommendation")}>
          Recommendations
        </Menu.Item>
        <Menu.Item key="5" icon={<AppstoreOutlined />} onClick={() => navigate("/composite")}>
          Composite
        </Menu.Item>
        {/* <Menu.Item key="6" icon={<TeamOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="7" icon={<FileOutlined />}>
          Reports
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;