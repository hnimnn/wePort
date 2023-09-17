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
    <div className="btn-responsive-PC">
      <Button 
        border="none"
        background="linear-gradient(90deg, rgba(255, 143, 119, 1) 0%, rgba(255, 86, 187, 1) 100%)"
        height = "40px"
        width = "150px"
        borderRadius = "8px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        fontSize="1.3rem"
        fontWeight="600"
        onClick={() => console.log("Cook")}
        icon= {<WalletOutlined />}
        content = "Wallet Connect"
        />
    </div>
    <div className="btn-responsive-mobile">
      <Button 
        border="none"
        background="linear-gradient(90deg, rgba(255, 143, 119, 1) 0%, rgba(255, 86, 187, 1) 100%)"
        height = "40px"
        width = "90px"
        borderRadius = "8px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        fontSize="1.1rem"
        fontWeight="600"
        onClick={() => console.log("Cook")}
        icon= {<WalletOutlined />}
        content = "Wallet"
        />
    </div>
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
