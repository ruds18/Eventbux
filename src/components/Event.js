import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'


function Event({month , day , location , event ,id}) {
  return (
    <Link to={"/event/"+ id }>
        <Card sx={{ maxWidth: 345, marginBottom:5, borderRadius:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="green iguana"
        />
        <CardContent>
         <Grid direction="row" container spacing={1}>
         <Grid item sx={{ marginTop:3 }}>
           <Typography sx={{ color: '#9E76F6'}}>{month}</Typography>
           <Typography sx={{ fontWeight:800, textAlign: 'center' }}>{day}</Typography>
        </Grid>
        <Grid direction="column" item xs={12} sm container sx={{ marginLeft:3 }}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight:800}}>
                {event}
              </Typography>
              </Grid> 
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {location}
              </Typography>
              </Grid>
        </Grid>
        
         </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  )
}

export default Event