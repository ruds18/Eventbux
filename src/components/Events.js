import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./styles/Events.css";
import Event from "./Event";
import data from "../data/events.json";
import { Button, Typography } from "@mui/material";




function Events() {
  return (
    <div className="body">
      <div className="navbar">
        <h1>EVENTBUX</h1>
        <div className="nav-options">
          <p>Login</p>
          <p>Sign Up</p>
        </div>
      </div>

      <div className="hero">
        <img src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbmNlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>

      <div className="search">
        <div className="search-inputs">
          <div className="search-field border-left">
            <h3>Looking for</h3>
            <TextField fullWidth sx={{ input: { color: 'white' } }}
              variant="standard"
              color="secondary"
              focused
              defaultValue="Webinar"
            />
          </div>

          <div className="search-field border-left">
            <h3>In</h3>
            <TextField fullWidth sx={{ input: { color: 'white' } }}
              variant="standard"
              color="secondary"
              focused
              defaultValue="Online"
            />
          </div>
          <div className="search-field">
            <h3>When</h3>
            <TextField fullWidth sx={{ input: { color: 'white' } }}
              variant="standard"
              color="secondary"
              focused
              defaultValue="Any date"
            />

          </div>
        </div>
        <div className="search-all">
          <SearchOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="filters">
      <Grid display='flex' justifyContent="space-between">
        <h1>Upcoming events</h1>
        <Grid display="flex" alignItems="center"  spacing={2} width={450} justifyContent="space-between">
            <Grid item >
            <Button  disableElevation endIcon={<KeyboardArrowDownIcon color="secondary" />} color="error" variant="contained"> Weekends  </Button>
            </Grid>
            <Grid item >
            <Button disableElevation  endIcon={<KeyboardArrowDownIcon color="secondary"/>}  color="error" variant="contained"> Event Type </Button>
            </Grid>
            <Grid item >
            <Button disableElevation endIcon={<KeyboardArrowDownIcon color="secondary"/>}   color="error" variant="contained"> Category </Button>
            </Grid>
          </Grid>
      </Grid>
       
        <div className="filter">

        </div>
      </div>

      <div className="events">
        {data.map((card) => {
          return (
            <Event
              key={card.id}
              day={card.date.day}
              month={card.date.month}
              event={card.event}
              location={card.location}
              id={card.id}
              img={card.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
