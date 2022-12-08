import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./styles/Events.css";
import Event from "./Event";
import data from "../data/events.json";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Events() {
  const [userFilter, setUserFilter] = useState(data);
  const [eventsCard, setEventsCards] = useState(data);
  const [dayfilter , setDayFilter] = useState('all');
  const [btnText, setBtnText] = useState("All");
  const [opn, setOpn] = React.useState(false);

  

  useEffect(()=>{
    if(dayfilter === 'all') {
       setUserFilter(eventsCard) 
       setAnchorEl(null);
       setBtnText(dayfilter)
       return;
       }
    const filtered = eventsCard.filter((ca) => ca.day === dayfilter );
    setUserFilter(filtered);
    setAnchorEl(null);
    setBtnText(dayfilter)
  }, [dayfilter])


 

  const filterCard = (parameter) => {
    const filteredCard = data.filter((card) => card.day === parameter);
    if (parameter != null) {
      setEventsCards(filteredCard);
    } else {
      setEventsCards(data);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpn((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpn(false);
  };

  const handleClose = (parameter) => {
    if (parameter != null) setBtnText(parameter);
    else{ setBtnText("all") }
    filterCard(parameter);
    setAnchorEl(null);
  };


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
        <img
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbmNlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>

      <div className="search">
        <div className="search-inputs">
          <div className="search-field border-left">
            <h3>Looking for</h3>
            <TextField
              fullWidth
              sx={{ input: { color: "white" } }}
              variant="standard"
              color="secondary"
              focused
              defaultValue="Webinar"
            />
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => setDayFilter('all') }>All</MenuItem>
            <MenuItem onClick={() => setDayFilter('weekday') }>Weekdays</MenuItem>
            <MenuItem onClick={() => setDayFilter('weekend') }>Weekend</MenuItem>
          </Menu>

          <div className="search-field border-left">
            <h3>In</h3>
            <TextField
              fullWidth
              sx={{ input: { color: "white" } }}
              variant="standard"
              color="secondary"
              focused
              defaultValue="Online"
            />
          </div>
          <div className="search-field">
            <h3>When</h3>
            <TextField
              fullWidth
              sx={{ input: { color: "white" } }}
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
        <Grid display="flex" justifyContent="space-between">
          <h1>Upcoming events</h1>
          <Grid
            display="flex"
            alignItems="center"
            spacing={2}
            width={400}
            justifyContent="space-between"
          >
            <Grid item>
              <Button
                disableRipple
                disableElevation
                endIcon={<KeyboardArrowDownIcon color="secondary" />}
                color="error"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
              >
                {" "}
                {btnText}{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                endIcon={<KeyboardArrowDownIcon color="secondary" />}
                color="error"
                variant="contained"
              >
                {" "}
                Event Type{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                endIcon={<KeyboardArrowDownIcon color="secondary" />}
                color="error"
                variant="contained"
              >
                {" "}
                Category{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <div className="filter"></div>
      </div>

      <div className="events">
        {userFilter.map((card) => {
          return (
            <Event
              key={card.id}
              day={card.date.day}
              month={card.date.month}
              event={card.event}
              location={card.location}
              id={card.id}
              img={card.img}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
