import React from "react";
import "./Header.scss";
import logoHeader from "../../Assets/logoHeader.svg";
import { IconButton,  } from "@mui/material";
import Button from "./../Button/Button";
import { WalletOutlined, Email, Notifications, Subject } from "@mui/icons-material";
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
export default function Header() {
  return (
    <div className="wrapper">
      <div className="header-menu">
        <IconButton aria-label="email" className="header-menu-btn">
          <Subject sx={{ color: grey[900], fontSize: 26 }}/>
        </IconButton>
        <img src={logoHeader} alt="Logo" className="logo" />
      </div>
    <div className="header-content">
    <nav className="header-nav">
      <ul>
        <li><a href="/community">Community</a></li>
        <li><a href="/recruit">Recruit</a></li>
        <li><a href="/market">Market</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/info">Info</a></li>
      </ul>
    </nav>
    <div className="header-btn-container"> 
      <Button 
        onClick={() => console.log("Cook")}
        icon= {<WalletOutlined style={{fontSize:"22px"}}/>}
        content = "Wallet Connect"
        className="btn-responsive-PC btn-wallet"
        />
    <Button 
        onClick={() => console.log("Cook")}
        icon= {<WalletOutlined style={{fontSize:"17px"}}/>}
        content = "Wallet"
        className="btn-responsive-mobile btn-wallet"
        />
    <IconButton aria-label="email">
      <Email sx={{ color: grey[900], fontSize: 17 }}/>
    </IconButton>
    <IconButton aria-label="notification">
      <Notifications sx={{ color: grey[900], fontSize: 17 }}/>
    </IconButton>
    <Avatar className="avatar" alt="Remy Sharp" src="https://mpost.io/wp-content/uploads/image-7-17.jpg" />
    </div>
    </div>
  </div>
  );
}
