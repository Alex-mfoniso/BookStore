// import React, { useState } from 'react';
// import { 
//   Layout, 
//   Menu, 
//   Input, 
//   Badge, 
//   Dropdown, 
//   Avatar, 
//   Space, 
//   Button,
//   message 
// } from 'antd';
// import { 
//   SettingOutlined, 
//   BellOutlined, 
//   SearchOutlined, 
//   LogoutOutlined,
//   UserOutlined 
// } from '@ant-design/icons';

// const { Header } = Layout;
// const { Search } = Input;

// const NavBar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(3);

//   const notifications = [
//     { id: 1, title: 'New message', description: 'You have a new message from John' },
//     { id: 2, title: 'System update', description: 'System will be updated at 3:00 AM' },
//     { id: 3, title: 'Reminder', description: 'Meeting with team at 10:00 AM' },
//   ];

//   const handleLogout = () => {
//     message.success('Logged out successfully!');
//     console.log('User logged out');
//   };

//   const handleSearch = (value) => {
//     message.info(`Searching for: ${value}`);
//     console.log('Search:', value);
//   };

//   const handleNotificationClick = () => {
//     setNotificationCount(0);
//     message.info('Notifications marked as read');
//   };

//   const notificationMenu = (
//     <Menu>
//       {notifications.map(item => (
//         <Menu.Item key={item.id}>
//           <div style={{ padding: '8px 12px' }}>
//             <strong>{item.title}</strong>
//             <p style={{ margin: 0 }}>{item.description}</p>
//           </div>
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
//     <>
//       <Header 
//         style={{ 
//           background: 'rgba(255, 255, 255, 0.95)', 
//           padding: '0 24px', 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center',
//           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           zIndex: 1000,
//           backdropFilter: 'saturate(180%) blur(10px)',
//           flexWrap: 'wrap', // allows wrapping on small screens
//           gap: '12px' // space between icons when wrapped
//         }}
//       >
//         <div style={{ fontWeight: 'bold', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
//           BookStore
//         </div>
        
//         <Space 
//           size="middle" 
//           align="center"
//           style={{
//             flexWrap: 'nowrap', // prevent breaking inside space, keep items inline
//             minWidth: 0, // allows shrinking in flexbox
//           }}
//         >
//           {searchVisible ? (
//             <Search
//               placeholder="Search..."
//               allowClear
//               enterButton
//               onSearch={handleSearch}
//               style={{ width: 200, minWidth: 120 }}
//               autoFocus
//               onBlur={() => setSearchVisible(false)}
//             />
//           ) : (
//             <Button 
//               type="text" 
//               icon={<SearchOutlined />} 
//               onClick={() => setSearchVisible(true)}
//               style={{ color: 'inherit' }}
//             />
//           )}

//           <Dropdown overlay={notificationMenu} placement="bottomRight" trigger={['click']}>
//             <Badge count={notificationCount} overflowCount={9}>
//               <Button 
//                 type="text" 
//                 icon={<BellOutlined />} 
//                 onClick={handleNotificationClick}
//                 style={{ color: 'inherit' }}
//               />
//             </Badge>
//           </Dropdown>

//           <Dropdown overlay={settingsMenu} placement="bottomRight">
//             <Button 
//               type="text" 
//               icon={<SettingOutlined />} 
//               style={{ color: 'inherit' }}
//             />
//           </Dropdown>

//           <Dropdown
//             overlay={
//               <Menu>
//                 <Menu.Item 
//                   key="logout" 
//                   icon={<LogoutOutlined />} 
//                   onClick={handleLogout}
//                   danger
//                 >
//                   Logout
//                 </Menu.Item>
//               </Menu>
//             }
//             placement="bottomRight"
//           >
//             <Avatar 
//               icon={<UserOutlined />} 
//               style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
//             />
//           </Dropdown>
//         </Space>
//       </Header>

//       {/* Spacer div to prevent content hiding behind fixed navbar */}
//       <div style={{ height: 64 }} />
//     </>
//   );
// };

// export default NavBar;




// components/layout/NavBar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Badge,
  Dropdown,
  Avatar,
  Space,
  Button,
  message,
  Menu,
} from "antd";
import {
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: "New message", description: "You have a new message from John" },
    { id: 2, title: "System update", description: "System will be updated at 3:00 AM" },
    { id: 3, title: "Reminder", description: "Meeting with team at 10:00 AM" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    message.success("Logged out successfully!");
    navigate("/login");
  };

  const handleSearch = (value) => {
    message.info(`Searching for: ${value}`);
  };

  const handleNotificationClick = () => {
    setNotificationCount(0);
    message.info("Notifications marked as read");
  };

  const notificationMenu = (
    <Menu>
      {notifications.map((item) => (
        <Menu.Item key={item.id}>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item key="view-all">View All Notifications</Menu.Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      <Menu.Item key="profile">Profile Settings</Menu.Item>
      <Menu.Item key="account">Account Settings</Menu.Item>
      <Menu.Item key="privacy">Privacy Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="help">Help & Support</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1,
        height: 64,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>BookStore</div>

      <Space>
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

        <Dropdown overlay={notificationMenu} trigger={["click"]}>
          <Badge count={notificationCount}>
            <Button icon={<BellOutlined />} type="text" onClick={handleNotificationClick} />
          </Badge>
        </Dropdown>

        <Dropdown overlay={settingsMenu}>
          <Button icon={<SettingOutlined />} type="text" />
        </Dropdown>

        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
                Logout
              </Menu.Item>
            </Menu>
          }
        >
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
        </Dropdown>
      </Space>
    </div>
  );
};

export default NavBar;
