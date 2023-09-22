import React from "react";
import "./MostInteracted.scss";
import InteractedCard from "../InteractedCard/InteractedCard";
import { Grid } from "@mui/material";

export default function MostInteracted() {
  return (
    <div className="interaction-component">
      <div className="title-line">
      <span className="title" style={{color:"rgba(255, 86, 187, 1)"}}>Most-Interacted &nbsp;</span>
      <span className="title">Contributor In 24hrs</span>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
          <InteractedCard/>
      </Grid>
      ))}
      </Grid>
      aaaa
    </div>
  );
}
