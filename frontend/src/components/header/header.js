import "./header.css"
import React from 'react';
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

function Header({actionNav}) {
  actionNav = localStorage.getItem("navigationHeader");

  return (
    <div className="header-content">
      <div className="left-content">
        <MenuOutlined />
      </div>
      <div className="center-content">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right-content">
        {actionNav !== "" && (<LeftOutlined onClick={actionNav}/>)}
      </div>
    </div>
  );
}

export default Header;