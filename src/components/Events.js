import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from '@mui/material/Grid'

import "./styles/Events.css";
import Event from "./Event";
import data from "../data/events.json";
import { Typography } from "@mui/material";

function Events() {
  return (
    <div className="body">
       <Grid   direction='row' container  >
         <Grid justifyContent='space-between' direction='row' container>
           <Grid item>
              <Typography variant="h3">EVENTBUX</Typography>
           </Grid>
           <Grid item>
              <Typography >Login</Typography>
              <Typography paragraph={true}>Sign Up</Typography>
           </Grid>
         </Grid>
       
   
      {data.map((card) => {
        return (
          <Event
            key={card.id}
            day={card.date.day}
            month={card.date.month}
            event={card.event}
            location={card.location}
            id={card.id}
          />
        );
      })}
      </Grid>
    </div>
  );
}

export default Events;
