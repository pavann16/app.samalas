import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles(()=>({
    label: {
        textAlign: "left"
    }
}));

  function Label(props){
    const classes = useStyles()
    return (<div className={classes.label}>
            <b>{props.children}</b>
    </div>);

}

export default Label;