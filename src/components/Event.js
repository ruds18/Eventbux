import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'


function Event({month , day , location , event ,id , img}) {
  return (
    <Link to={"/event/"+ id }>
        <Card elevation={0} sx={{ maxWidth: 345, marginBottom:5, borderRadius:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent >
         <Grid direction="row" display="flex" justifyContent="center" alignItems="center"  container   >
         <Grid sx={"margin-top: 1rem"} item display="flex" direction="column" alignItems="center"   >
           <Typography variant='body2' color="secondary.light"> {month} </Typography>
           <Typography variant='h5'  >{day}</Typography>
        </Grid>
        <Grid direction="column" item xs={12} sm container sx={{ marginLeft:3 }}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight:800}}>
                {event}
              </Typography>
              </Grid> 
              <Grid item xs>
              <Typography gutterBottom variant="body2" color="textSecondary" component="div">
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