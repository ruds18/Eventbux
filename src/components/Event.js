import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader } from '@mui/material';
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import  './styles/Event.css'
import { Padding } from '@mui/icons-material';
import { width } from '@mui/system';
import ShareIcon from '@mui/icons-material/Share';


function Event({month , day , location , event ,id , img, price}) {
  const styles = {
   media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
   },
   card: {
      position: 'relative',
   },
   overlay: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      color: 'black',
      backgroundColor: 'white',
      padding : '0.3rem 0.8rem',
      borderRadius: '0.5rem',

   },
   likebtn:{
    position: 'absolute',
    top: '10px',
      right: '10px',
      padding : '0.3rem 0.8rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
   },
   cardStyle : {
   
}
  }
  
  return (
  
        <Card style={styles.cardStyle} elevation={0} sx={{ maxWidth: 345, marginBottom:5, borderRadius:3}}>
      <CardActionArea>
        <div style={styles.overlay}>
            <Typography variant="subtitle2" >{price}</Typography>
      </div>
      <div style={styles.likebtn}>
            <ShareIcon color='secondary' />
      </div>
      <Link to={"/event/"+ id }>
      <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent  >
         <Grid direction="row" display="flex" justifyContent="center" alignItems="center"     >
         <Grid sx={"margin-top: 1rem"} item display="flex" direction="column" alignItems="center"   >
           <Typography variant='body2' color="secondary.light"> {month} </Typography>
           <Typography color="black" variant='h5'  >{day}</Typography>
        </Grid>
        <Grid direction="column" item xs={12} sm container sx={{ marginLeft:3 }}>
            <Grid item xs>
              <Typography color="black" gutterBottom variant="subtitle1" component="div" sx={{ fontWeight:800}}>
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
        </Link>
      </CardActionArea>
    </Card>

  )
}

export default Event