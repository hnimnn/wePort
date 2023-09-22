import React from "react";
import "./InteractedCard.scss";
import { Badge, Avatar  } from "@mui/material";
import Clock from "../Icons/Clock";
import Heart from "../Icons/Heart";
import View from "../Icons/View";
import fire from "../../Assets/images/fire.gif"
export default function InteractedCard() {
  return (
    <div className="interaction-card">
      <div className="interaction-left">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={1}
        >
          <Avatar alt="Travis Howard" src="https://dulich3mien.vn/wp-content/uploads/2023/04/Anh-Avatar-doi-4.jpg" sx={{ width: 57, height: 57 }}/> 
        </Badge>
        <div className="content">
          <span className="name">Huy Nguyen</span>
          <span className="topic">#Web-Project</span>
          <span className="project">Elearn- Elearning Landing Figma</span>
          <div className="clock">
            <Clock/>
            <span className="hour">&nbsp; 6 hrs</span>
          </div>
        </div>
      </div>
        <div className="interaction-right">
          <img src={fire} alt="gif" style={{width:"32px", height:"31px"}}></img>
          <div className="interaction">
            <div className="heart">
              <Heart/>
              <span className="text">&nbsp;789</span>
            </div>
            <div className="view">
              <View/>
              <span className="text">&nbsp; 999</span>
            </div>
          </div>
        </div>
    </div>
  );
}
