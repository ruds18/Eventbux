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
import NativeSelect from '@mui/material/NativeSelect';

const currencies = [
  {
    value: 'Online',
    label: 'Online',
  },
  {
    value: 'Offline',
    label: 'Offline',
  }
];


function Events() {
  const [userFilter, setUserFilter] = useState(data);
  const [eventsCard, setEventsCards] = useState(data);
  const [dayfilter , setDayFilter] = useState('all');
  const [eventName, setEventName] = useState("");

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(()=>{
    if(dayfilter === 'all') {
       setUserFilter(eventsCard) 
        return;
       }
    const filtered = eventsCard.filter((ca) => ca.day === dayfilter );
    setUserFilter(filtered);
  }, [dayfilter])
    
 
  console.log(eventName)


  const handelSearch = ()=>{
    const newData = eventsCard.filter((x) => x.event === eventName);
    setUserFilter(newData);
    console.log(newData)
  }
 
  const styles ={
    searchbtn :{
     color : "white",
     cursor : "pointer"
    },
    textfield :{
      color:"white",
      

    },
    input: { color: "white" },
  }

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
              placeholder="webinar"

              onChange={(e)=> setEventName(e.target.value)}
            />
          </div>
    
         

          <div className="search-field border-left">
            <h3>In</h3>
            <div>
        <TextField
        style={styles.textfield}
          id="filled-select-currency"
          select
          fullWidth
          value={currency}
          onChange={handleChange}
          InputLabeText={{text: false}}
          sx={{ input: { color: 'white' } }}
          inputProps={styles.input}
          variant='standard'
          color="secondary"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      
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
        <div style={styles.searchbtn}  onClick={handelSearch} className="search-all">
          <SearchOutlinedIcon  fontSize="large" />
        </div>
      </div>

      <div className="filters">
        <Grid display="flex" justifyContent="space-between">
          <h1>Upcoming events</h1>
          <Grid
            display="flex"
            alignItems="center"
            spacing={2}
            width={300}
            justifyContent="space-between"
          >
            <Grid item>
              <Button
                disableRipple
                disableElevation
               
                color={dayfilter === 'all' ? "secondary" : "error"}
                // id="basic-button"
                // aria-controls={open ? "basic-menu" : undefined}
                // aria-haspopup="true"
                // aria-expanded={open ? "true" : undefined}
                // onClick={handleClick}
                variant="contained"
                onClick={() => setDayFilter('all') }
              >

                ALL
              </Button>
            </Grid>
            <Grid item>
              <Button
              
                disableElevation
                onClick={() => setDayFilter('weekday') }
                color={dayfilter === 'weekday' ? "secondary" : "error"}
                variant="contained"
              >
              
                Weekday
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                color={dayfilter === 'weekend' ? "secondary" : "error"}
                variant="contained"
                onClick={() => setDayFilter('weekend') }
              >
                Weekend
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
