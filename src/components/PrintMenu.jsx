import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomIcon from "./IconItem";
import { useLocation, useNavigate } from "react-router";
import { authenticate } from "../utils/authenticate";

var key = 0;
export const PrintMenu = React.memo(({name, path, icon, label,open,setActiveItem,activeItem, color, defaultColor}) =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [bgColor,setBgColor] =useState(defaultColor?defaultColor:'ffffff')
    useEffect(()=>{
      console.log("PrintMenu Call")
        let isCancelled = false;
        if(!isCancelled){
            const matched = location.pathname===path;
            if(matched){
              setActiveItem(name)
              setBgColor(color)
            }
            
        }
        return () => {isCancelled = true}

    },[activeItem, location]);

    function redirect (path) {
        console.log("redirect: ",path)
        setActiveItem(name)
        setBgColor(color)
        console.log("redirecting PrintMenu")
        navigate(path);
    }


    return (<>
            {<ListItem sx={{backgroundColor: bgColor,
               display: 'block' }} 
               key={key++} onClick={()=>{redirect(path)}}>
                <ListItemButton
                sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}>
                <ListItemIcon
                sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}>
                  <CustomIcon src={icon}></CustomIcon>
                </ListItemIcon>
                <ListItemText primary={label} 
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]} />
                </ListItemButton>
            </ListItem>}

            </>);
});
