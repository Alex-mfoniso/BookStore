// import React from "react";
// import MyReview from "../pages/MyReview";
// import {
//   Layout,
//   Menu,
//   Card,
//   Row,
//   Col,
//   Typography,
//   Statistic,
//   Avatar,
// } from "antd";
// import {
//   DashboardOutlined,
//   BookOutlined,
//   StarOutlined,
//   DollarOutlined,
//   UserOutlined,
//   ShoppingCartOutlined,
//   HeartOutlined,
//   LockOutlined,
// } from "@ant-design/icons";
// import BookRecommendation from "./BookRecommendation";
// // import './App.css';

// const { Header, Content, Sider } = Layout;
// const { Title, Text } = Typography;

// const Dashboard = () => {
//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider breakpoint="lg" collapsedWidth="0">
//         <div className="logo">
//           <Title level={3} style={{ color: "white", padding: "16px" }}>
//             Muse Dashboard
//           </Title>
//         </div>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
//           <Menu.Item key="1" icon={<DashboardOutlined />}>
//             Dashboard
//           </Menu.Item>
//           <Menu.Item key="2" icon={<BookOutlined />}>
//             Book Recommendations
//           </Menu.Item>
//           <Menu.Item key="3" icon={<StarOutlined />}>
//             Reviews
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             background: "#fff",
//             padding: 0,
//             textAlign: "right",
//             paddingRight: "20px",
//           }}
//         >
//           <Text strong>
//             <UserOutlined /> Sign in
//           </Text>
//         </Header>
//         <Content style={{ margin: "24px 16px 0" }}>
//           <Row gutter={16}>
//             <Col span={6}>
//               <Card>
//                 <Statistic
//                   title="Today's Sales"
//                   value={53000}
//                   prefix={<DollarOutlined />}
//                   valueStyle={{ color: "#3f8600" }}
//                   suffix="+30%"
//                 />
//               </Card>
//             </Col>
//             <Col span={6}>
//               <Card>
//                 <Statistic
//                   title="Today's Users"
//                   value={3200}
//                   prefix={<UserOutlined />}
//                   valueStyle={{ color: "#3f8600" }}
//                   suffix="+20%"
//                 />
//               </Card>
//             </Col>
//             <Col span={6}>
//               <Card>
//                 <Statistic
//                   title="New Clients"
//                   value={1200}
//                   prefix={<HeartOutlined />}
//                   valueStyle={{ color: "#cf1322" }}
//                   suffix="-20%"
//                 />
//               </Card>
//             </Col>
//             <Col span={6}>
//               <Card>
//                 <Statistic
//                   title="New Orders"
//                   value={13200}
//                   prefix={<ShoppingCartOutlined />}
//                   valueStyle={{ color: "#3f8600" }}
//                   suffix="+10%"
//                 />
//               </Card>
//             </Col>
//           </Row>
//           <div style={{ marginTop: 24 }}>
//             <Card title="Active Users">
//               <Text>+30% from last week</Text>
//               {/* Placeholder for charts */}
//               <div
//                 style={{
//                   height: 200,
//                   backgroundColor: "#f0f2f5",
//                   marginTop: 16,
//                 }}
//               >
//                 <Text type="secondary">[Chart Placeholder]</Text>
//               </div>
//             </Card>
//           </div>

//           <MyReview bookId="12345" />
//           {/* <BookRecommendation productId={102}/> */}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Input, 
  Badge, 
  Dropdown, 
  Avatar, 
  Space, 
  Button,
  message,
  Card,
  Row,
  Col,
  Statistic,
  Typography
} from 'antd';
import { 
  SettingOutlined, 
  BellOutlined, 
  SearchOutlined, 
  LogoutOutlined,
  UserOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  FileOutlined,
  BarChartOutlined,
  BookOutlined,
  StarOutlined,
  LikeOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

// Navbar component
const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  const notifications = [
    { id: 1, title: 'New message', description: 'You have a new message from John' },
    { id: 2, title: 'System update', description: 'System will be updated at 3:00 AM' },
    { id: 3, title: 'Reminder', description: 'Meeting with team at 10:00 AM' },
  ];

  const handleLogout = () => {
    message.success('Logged out successfully!');
    console.log('User logged out');
  };

  const handleSearch = (value) => {
    message.info(`Searching for: ${value}`);
    console.log('Search:', value);
  };

  const handleNotificationClick = () => {
    setNotificationCount(0);
    message.info('Notifications marked as read');
  };

  const notificationMenu = (
    <Menu>
      {notifications.map(item => (
        <Menu.Item key={item.id}>
          <div style={{ padding: '8px 12px' }}>
            <strong>{item.title}</strong>
            <p style={{ margin: 0 }}>{item.description}</p>
          </div>
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
    <Header 
      style={{ 
        background: '#fff', 
        padding: '0 24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        height: 64,
        gap: 16,
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.4rem', userSelect: 'none' }}>BookStore</div>
      
      <Space size="middle" align="center" style={{ flexWrap: 'nowrap' }}>
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
          <Button 
            type="text" 
            icon={<SearchOutlined />} 
            onClick={() => setSearchVisible(true)}
            style={{ color: 'inherit' }}
          />
        )}

        <Dropdown 
          overlay={notificationMenu} 
          placement="bottomRight" 
          trigger={['click']}
        >
          <Badge count={notificationCount} overflowCount={9} offset={[0, 4]}>
            <Button 
              type="text" 
              icon={<BellOutlined />} 
              onClick={handleNotificationClick}
              style={{ color: 'inherit' }}
            />
          </Badge>
        </Dropdown>

        <Dropdown overlay={settingsMenu} placement="bottomRight">
          <Button 
            type="text" 
            icon={<SettingOutlined />} 
            style={{ color: 'inherit' }}
          />
        </Dropdown>

        <Dropdown
          overlay={
            <Menu>
              <Menu.Item 
                key="logout" 
                icon={<LogoutOutlined />} 
                onClick={handleLogout}
                danger
              >
                Logout
              </Menu.Item>
            </Menu>
          }
          placement="bottomRight"
        >
          <Avatar 
            icon={<UserOutlined />} 
            style={{ cursor: 'pointer', backgroundColor: '#1890ff' }}
          />
        </Dropdown>
      </Space>
    </Header>
  );
};

// Dashboard Layout
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={() => setCollapsed(!collapsed)}
        width={250}
        style={{
          background: '#fff',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1,
          paddingTop: 12,
          paddingBottom: 12,
          overflowY: 'auto'
        }}
      >
        <div 
          style={{ 
            height: 64, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '0 24px',
            marginBottom: 12,
            borderBottom: '1px solid #f0f0f0',
            userSelect: 'none'
          }}
        >
          {!collapsed ? (
            <Title level={4} style={{ color: '#1890ff', margin: 0 }}>My Dashboard</Title>
          ) : (
            <DashboardOutlined style={{ fontSize: 28, color: '#1890ff' }} />
          )}
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          style={{ borderRight: 0 }}
          inlineIndent={16}
          itemIconSize={24}
        >
          <Menu.Item key="1" icon={<DashboardOutlined style={{ fontSize: 20 }} />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined style={{ fontSize: 20 }} />}>
            Books
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined style={{ fontSize: 20 }} />}>
            Reviews
          </Menu.Item>
          <Menu.Item key="4" icon={<LikeOutlined style={{ fontSize: 20 }} />}>
            Recommendations
          </Menu.Item>
          <Menu.Item key="5" icon={<AppstoreOutlined style={{ fontSize: 20 }} />}>
            Composite
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined style={{ fontSize: 20 }} />}>
            Users
          </Menu.Item>
          <Menu.Item key="7" icon={<FileOutlined style={{ fontSize: 20 }} />}>
            Reports
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        {/* Navbar */}
        <NavBar />

        {/* Content Area */}
        <Content 
          style={{ 
            margin: '24px 16px', 
            padding: 24, 
            background: '#fff', 
            minHeight: 280,
            borderRadius: 6,
            boxShadow: '0 1px 4px rgb(0 21 41 / 8%)'
          }}
        >
          <Title level={2} style={{ marginBottom: 24 }}>Dashboard Overview</Title>
          
          {/* Sample Dashboard Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
            <Col xs={24} sm={12} md={6}>
              <Card bordered hoverable>
                <Statistic 
                  title="Total Users" 
                  value={1128} 
                  prefix={<TeamOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card bordered hoverable>
                <Statistic 
                  title="Total Orders" 
                  value={543} 
                  prefix={<ShoppingCartOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card bordered hoverable>
                <Statistic 
                  title="Revenue" 
                  value={8846} 
                  prefix="$"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card bordered hoverable>
                <Statistic 
                  title="Active Projects" 
                  value={28} 
                  prefix={<FileOutlined />}
                />
              </Card>
            </Col>
          </Row>

          {/* Main Content Area */}
          <Card title="Recent Activity" style={{ borderRadius: 6 }}>
            <p style={{ marginBottom: 12 }}>Dashboard content goes here...</p>
            <p style={{ marginBottom: 0 }}>You can add charts, tables, or other components.</p>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;