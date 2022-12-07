import { pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const Colors ={
   primary: "#FFFF",
   secondary : "#7848F4",
   textpink: "#9E76F6"

}

const theme = createTheme({
    palette : {
        primary:{
            main :Colors.primary
        },
  
        secondary:{
            main :Colors.secondary,
            light: Colors.textpink
        },

       
    },
    MuiTypography :{

    }
 
});
export default theme;