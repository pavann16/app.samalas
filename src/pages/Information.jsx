
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const useStyles = makeStyles(()=>({
  information: {
      fontFamily: "Roboto"
    }
}));

export const Information = () =>{
  useEffect(() => {
  }, []);

  const classes = useStyles()

  return (
    <>
      <div classes={classes.information} style={{padding:20}}>
         Information
      </div>
    </>
  );
}