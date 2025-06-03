
import React, { useState, useEffect } from "react";
import { Input, Badge, Dropdown, Avatar, Space, Button, message, Menu } from "antd";
import { SettingOutlined, BellOutlined, SearchOutlined, LogoutOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Search } = Input;


const NavBar = ({ sidebarWidth }) => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false); // State to track screen size



  const handleLogout = () => {
  // console.log("Logout triggered");
  localStorage.removeItem("authToken");
  message.success("Logged out successfully!");
  navigate("/login");
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
      <div
  style={{
    fontWeight: "bold",
    fontSize: "1.6rem", // Slightly larger font size for emphasis
    whiteSpace: "nowrap",
    color: "#1890ff", // Added a primary color for better visibility
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Added subtle text shadow
    padding: "0 10px", // Added padding for spacing
    cursor: "pointer", // Added pointer cursor for interactivity
  }}
>
  BookStore
</div>

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
          <Dropdown overlay={<Menu><Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>Logout</Menu.Item></Menu>}>
            
              <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
           
          </Dropdown>
        </Space>
      )}
    </div>
  );
};

export default NavBar;