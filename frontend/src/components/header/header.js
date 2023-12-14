import "./header.css"
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';

function Header() {
  const nav = useNavigate();
  const location = useLocation();

  const goBack = (() => {
    nav("/busline");
  });

  const hideLeftContent = location.pathname.endsWith('/busline');

  return (
    <div className="header-content">
      <div className="left-content">
        <MenuOutlined />
      </div>
      <div className="center-content">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right-content">
        {!hideLeftContent && <LeftOutlined onClick={goBack} />}
      </div>
    </div>
  );
}

export default Header;