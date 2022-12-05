import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/Events.css'
import Event from './Event';
import data from '../data/events.json'


function Events() {
  return (
    <div>
        {
            data.map(card =>{
                return (
                    <Event key={card.id} day={card.date.day} month={card.date.month} event = {card.event} location={card.location}  />
                )
            })
            }
    </div>
  )
}

export default Events