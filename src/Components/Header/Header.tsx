import React from "react";
import "./Header.scss";
import logoHeader from "../../Assets/logoHeader.svg";
import { IconButton,  } from "@mui/material";
import Button from "./../Button/Button";
import { WalletOutlined } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
export default function Header() {
  return (
    <div className="wrapper">
    <img src={logoHeader} alt="Logo" className="logo" />
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
        icon= {<WalletOutlined />}
        content = "Wallet Connect"
        className="btn-responsive-PC btn-wallet"
        />
    <Button 
        onClick={() => console.log("Cook")}
        icon= {<WalletOutlined />}
        content = "Wallet"
        className="btn-responsive-mobile btn-wallet"
        />
    <IconButton aria-label="email">
      <EmailIcon sx={{ color: grey[900] }}/>
    </IconButton>
    <IconButton aria-label="notification">
      <NotificationsIcon sx={{ color: grey[900] }}/>
    </IconButton>
    <Avatar className="avatar" alt="Remy Sharp" src="https://mpost.io/wp-content/uploads/image-7-17.jpg" />
    </div>
    </div>
  </div>
  );
}
