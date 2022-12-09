import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useParams} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import data from '../data/events.json'

function EventMain() {
    const params = useParams();
    const {id} = params;
    var des="";
    var event="";
    const d = data.map((card)=>{ 
        if(Number(card.id) === Number(id)){
            des = card.description;
            event= card.event
        }
    })

  return (
    <div>
        <Typography> {id} </Typography>
        <Typography> {event} </Typography>
        <Typography> {des} </Typography>
    </div>
  )
}

export default EventMain