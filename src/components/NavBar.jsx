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
  message 
} from 'antd';
import { 
  SettingOutlined, 
  BellOutlined, 
  SearchOutlined, 
  LogoutOutlined,
  UserOutlined 
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // Mock notifications data
  const notifications = [
    { id: 1, title: 'New message', description: 'You have a new message from John' },
    { id: 2, title: 'System update', description: 'System will be updated at 3:00 AM' },
    { id: 3, title: 'Reminder', description: 'Meeting with team at 10:00 AM' },
  ];

  const handleLogout = () => {
    // Replace with actual logout logic
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
        zIndex: 1
      }}
    >
      {/* Logo or brand name can go here */}
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>BookStore</div>
      
      <Space size="large">
        {/* Search - appears when icon is clicked */}
        {searchVisible ? (
          <Search
            placeholder="Search..."
            allowClear
            enterButton
            onSearch={handleSearch}
            style={{ width: 200 }}
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

        {/* Notifications */}
        <Dropdown 
          overlay={notificationMenu} 
          placement="bottomRight" 
          trigger={['click']}
        >
          <Badge count={notificationCount} overflowCount={9}>
            <Button 
              type="text" 
              icon={<BellOutlined />} 
              onClick={handleNotificationClick}
              style={{ color: 'inherit' }}
            />
          </Badge>
        </Dropdown>

        {/* Settings */}
        <Dropdown overlay={settingsMenu} placement="bottomRight">
          <Button 
            type="text" 
            icon={<SettingOutlined />} 
            style={{ color: 'inherit' }}
          />
        </Dropdown>

        {/* User avatar and logout */}
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

export default NavBar;