
import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

import React from 'react'

function Navbar() {
    const theme = useTheme();
    console.log(theme);
    const change = useMediaQuery(theme.breakpoints.down('sm'));
    const customWidth = !change ? "93%" : "100%";
    const customPadding = !change ? '2rem' : "1rem"
    const customMargin = !change ? "1rem" : "1rem"
    const customfont = !change ? "500" : "400"
    const padingTop = !change ? "3rem" : "1rem"


    const styles = {
        Navbar:{
            margin:`${customMargin} 0`
        }, 
        hero:{
         fontWeight: `${customfont}`,
         fontSize:"2rem "
      
        },
        SignBtn :{
            backgroundColor: "#F0EBFC",
            color:"#7848F8",
            
           padding: `0.8rem ${customPadding}`,
           borderRadius:" 0.5rem",
           cursor: "pointer",
        },
        LoginBtn :{
            cursor:"pointer",
          marginRight: `${customMargin}`
        }
    }


  return (
 
         <Grid   sx={{margin: "auto"  , width : `${customWidth}` , padding : "3rem 0" }} display = "flex" justifyContent="center" alignItems="center" container>
             <Grid item xs={6}>
                <Typography style={styles.hero} variant="h2">EVENTBUX</Typography>
             </Grid>
             <Grid item  display="flex" justifyContent="flex-end" alignItems="center" xs={6}>
                <Box  display="flex" justifyContent="space-between" alignItems="center">
                    <Typography  style={styles.LoginBtn} variant="body1" >Login</Typography>
                    <Typography style={styles.SignBtn} variant="body1">Sign Up</Typography>
                </Box>
             </Grid>
         </Grid>

  )
}

export default Navbar