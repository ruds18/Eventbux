import { createTheme } from "@mui/material/styles";

const Colors ={
   primary: "#FFFF",
   secondary : "#7848F4",

}

const theme = createTheme({
    palette : {
        primary:{
            main :Colors.primary
        },
  
        secondary:{
            main :Colors.secondary
        }
       
    }
});
export default theme;