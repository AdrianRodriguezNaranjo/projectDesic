import "./footer.css"
import React from 'react';
// import { useNavigate } from "react-router-dom";
import { DatabaseOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';

function Footer() {
  // const nav = useNavigate();

  // const goBack = (() => {
  //   nav("/busline");
  // });
  // <div className="footer-item" onClick={() => /* Handle Click */}>

  return (
    <div className="footer-content">
    <div className="footer-item">
      <EnvironmentOutlined />
      <span>Paradas</span>
    </div>
    <div className="footer-item">
      <DatabaseOutlined />
      <span>Líneas</span>
    </div>
    <div className="footer-item">
      <UserOutlined />
      <span>Usuario</span>
    </div>
  </div>
  );
}

export default Footer;