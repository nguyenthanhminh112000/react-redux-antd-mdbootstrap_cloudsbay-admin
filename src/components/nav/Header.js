import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
const { SubMenu, Item } = Menu;
console.log('Header outside');
const Header = () => {
  console.log('Header inside');
  //hooks
  const [current, setCurrent] = useState('');
  const { user } = useSelector((state) => state);
  //functions
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
        zIndex: '9',
      }}
    >
      {console.log('Header inside return')}
      <nav>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ display: 'flex' }}
        >
          <Item key='home' icon={<AppstoreOutlined />}>
            <Link to='/'>Admin Dashboard</Link>
          </Item>
        </Menu>
      </nav>
      <nav style={{ flexGrow: 1 }}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          {user ? (
            <SubMenu
              key='SubMenu'
              icon={<SettingOutlined />}
              title={user ? user.email.split('@')[0] : 'Username'}
            >
              <Item key='admin-dashboard'>
                <Link to='/admin/dashboard'>Dashboard</Link>
              </Item>

              <Item
                key='logout'
                icon={<LogoutOutlined />}
                onClick={handleLogout}
              >
                Logout
              </Item>
            </SubMenu>
          ) : (
            <>
              <Item key='login' icon={<UserOutlined />}>
                <Link to='/login'>Admin Login</Link>
              </Item>
            </>
          )}
        </Menu>
      </nav>
    </nav>
  );
};

export default Header;
