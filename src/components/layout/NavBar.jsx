
// // components/layout/NavBar.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Input,
//   Badge,
//   Dropdown,
//   Avatar,
//   Space,
//   Button,
//   message,
//   Menu,
// } from "antd";
// import {
//   SettingOutlined,
//   BellOutlined,
//   SearchOutlined,
//   LogoutOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// const { Search } = Input;

// const NavBar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(3);
//   const navigate = useNavigate();

//   const notifications = [
//     { id: 1, title: "New message", description: "You have a new message from John" },
//     { id: 2, title: "System update", description: "System will be updated at 3:00 AM" },
//     { id: 3, title: "Reminder", description: "Meeting with team at 10:00 AM" },
//   ];

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//     message.success("Logged out successfully!");
//     navigate("/login");
//   };

//   const handleSearch = (value) => {
//     message.info(`Searching for: ${value}`);
//   };

//   const handleNotificationClick = () => {
//     setNotificationCount(0);
//     message.info("Notifications marked as read");
//   };

//   const notificationMenu = (
//     <Menu>
//       {notifications.map((item) => (
//         <Menu.Item key={item.id}>
//           <strong>{item.title}</strong>
//           <p>{item.description}</p>
//         </Menu.Item>
//       ))}
//       <Menu.Divider />
//       <Menu.Item key="view-all">View All Notifications</Menu.Item>
//     </Menu>
//   );

//   const settingsMenu = (
//     <Menu>
//       <Menu.Item key="profile">Profile Settings</Menu.Item>
//       <Menu.Item key="account">Account Settings</Menu.Item>
//       <Menu.Item key="privacy">Privacy Settings</Menu.Item>
//       <Menu.Divider />
//       <Menu.Item key="help">Help & Support</Menu.Item>
//     </Menu>
//   );

//   return (
//     <div
//       style={{
//         background: "#fff",
//         padding: "0 24px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//         height: 64,
//       }}
//     >
//       <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>BookStore</div>

//       <Space>
//         {searchVisible ? (
//           <Search
//             placeholder="Search..."
//             allowClear
//             enterButton
//             onSearch={handleSearch}
//             style={{ width: 240 }}
//             autoFocus
//             onBlur={() => setSearchVisible(false)}
//           />
//         ) : (
//           <Button icon={<SearchOutlined />} type="text" onClick={() => setSearchVisible(true)} />
//         )}

//         <Dropdown overlay={notificationMenu} trigger={["click"]}>
//           <Badge count={notificationCount}>
//             <Button icon={<BellOutlined />} type="text" onClick={handleNotificationClick} />
//           </Badge>
//         </Dropdown>

//         <Dropdown overlay={settingsMenu}>
//           <Button icon={<SettingOutlined />} type="text" />
//         </Dropdown>

//         <Dropdown
//           overlay={
//             <Menu>
//               <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
//                 Logout
//               </Menu.Item>
//             </Menu>
//           }
//         >
//           <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
//         </Dropdown>
//       </Space>
//     </div>
//   );
// };

// // export default NavBar;

// import React, { useState, useEffect } from "react";
// import { Input, Badge, Dropdown, Avatar, Space, Button, message, Menu } from "antd";
// import { SettingOutlined, BellOutlined, SearchOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

// const { Search } = Input;

// const NavBar = ({ sidebarWidth }) => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(3);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     message.success("Logged out successfully!");
//   };

//   const handleSearch = (value) => {
//     message.info(`Searching for: ${value}`);
//   };

//   return (
//     <div
//       style={{
//         background: "#fff",
//         padding: "0 24px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "sticky",
//         top: 0,
//         zIndex: 1,
//         height: 64,
//         marginLeft: sidebarWidth, // Adjust navbar position based on sidebar width
//         transition: "margin-left 0.3s ease", // Smooth transition when sidebar collapses
//       }}
//     >
//       <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>BookStore</div>
//       <Space>
//         {searchVisible ? (
//           <Search
//             placeholder="Search..."
//             allowClear
//             enterButton
//             onSearch={handleSearch}
//             style={{ width: 240 }}
//             autoFocus
//             onBlur={() => setSearchVisible(false)}
//           />
//         ) : (
//           <Button icon={<SearchOutlined />} type="text" onClick={() => setSearchVisible(true)} />
//         )}
//         <Dropdown overlay={<Menu><Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Menu.Item></Menu>}>
//           <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
//         </Dropdown>
//       </Space>
//     </div>
//   );
// };

// export default NavBar;


// import React, { useState, useEffect } from "react";
// import { Input, Badge, Dropdown, Avatar, Space, Button, message, Menu } from "antd";
// import { SettingOutlined, BellOutlined, SearchOutlined, LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

// const { Search } = Input;

// const NavBar = ({ sidebarWidth }) => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(3);
//   const [isMobile, setIsMobile] = useState(false); // State to track screen size

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     message.success("Logged out successfully!");
//   };

//   const handleSearch = (value) => {
//     message.info(`Searching for: ${value}`);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Add resize event listener

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup event listener
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         background: "#fff",
//         padding: "0 24px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "fixed", // Fix position to align with the sidebar
//         top: 0,
//         left: sidebarWidth, // Align the navbar to start where the sidebar ends
//         zIndex: 1,
//         height: 64,
//         width: `calc(100% - ${sidebarWidth}px)`, // Adjust width to fill remaining space
//         transition: "left 0.3s ease", // Smooth transition when sidebar collapses
//       }}
//     >
//       <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>BookStore</div>

//       {isMobile ? (
//         <Dropdown
//           overlay={
//             <Menu>
//               <Menu.Item key="search" icon={<SearchOutlined />} onClick={() => setSearchVisible(true)}>
//                 Search
//               </Menu.Item>
//               <Menu.Item key="notifications" icon={<BellOutlined />}>
//                 Notifications
//               </Menu.Item>
//               <Menu.Item key="settings" icon={<SettingOutlined />}>
//                 Settings
//               </Menu.Item>
//               <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
//                 Logout
//               </Menu.Item>
//             </Menu>
//           }
//           trigger={["click"]}
//         >
//           <Button icon={<MenuOutlined />} type="text" />
//         </Dropdown>
//       ) : (
//         <Space>
//           {searchVisible ? (
//             <Search
//               placeholder="Search..."
//               allowClear
//               enterButton
//               onSearch={handleSearch}
//               style={{ width: 240 }}
//               autoFocus
//               onBlur={() => setSearchVisible(false)}
//             />
//           ) : (
//             <Button icon={<SearchOutlined />} type="text" onClick={() => setSearchVisible(true)} />
//           )}
//           <Dropdown overlay={<Menu><Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Menu.Item></Menu>}>
//             <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
//           </Dropdown>
//         </Space>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { Input, Badge, Dropdown, Avatar, Space, Button, message, Menu } from "antd";
import { SettingOutlined, BellOutlined, SearchOutlined, LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";

const { Search } = Input;

const NavBar = ({ sidebarWidth }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false); // State to track screen size

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    message.success("Logged out successfully!");
  };

  const handleSearch = (value) => {
    message.info(`Searching for: ${value}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        padding: "0 5px", // Reduced padding to shift content slightly to the left
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "fixed", // Fix position to align with the sidebar
        top: 0,
        left: sidebarWidth, // Align the navbar to start where the sidebar ends
        zIndex: 1,
        height: 64,
        width: `calc(100% - ${sidebarWidth}px)`, // Adjust width to fill remaining space
        transition: "left 0.3s ease", // Smooth transition when sidebar collapses
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.4rem", whiteSpace: "nowrap" }}>BookStore</div>

      {isMobile ? (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="search" icon={<SearchOutlined />} onClick={() => setSearchVisible(true)}>
                Search
              </Menu.Item>
              <Menu.Item key="notifications" icon={<BellOutlined />}>
                Notifications
              </Menu.Item>
              <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
                Logout
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <Button icon={<MenuOutlined />} type="text" />
        </Dropdown>
      ) : (
        <Space size="small" style={{ flexWrap: "wrap", justifyContent: "flex-start" }}> {/* Adjusted justifyContent */}
          {searchVisible ? (
            <Search
              placeholder="Search..."
              allowClear
              enterButton
              onSearch={handleSearch}
              style={{ width: 240 }}
              autoFocus
              onBlur={() => setSearchVisible(false)}
            />
          ) : (
            <Button icon={<SearchOutlined />} type="text" onClick={() => setSearchVisible(true)} />
          )}
          
          <Dropdown overlay={<Menu><Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item></Menu>}>
            <Button icon={<SettingOutlined />} type="text" />
          </Dropdown>
          <Dropdown overlay={<Menu><Menu.Item key="notifications" icon={<BellOutlined />}>Notifications</Menu.Item></Menu>}>
           <Badge count={notificationCount}>
            <Button icon={<BellOutlined />} type="text" />
             </Badge>
          </Dropdown>
          <Dropdown overlay={<Menu><Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Menu.Item></Menu>}>
            
              <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
           
          </Dropdown>
        </Space>
      )}
    </div>
  );
};

export default NavBar;