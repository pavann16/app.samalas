import { useEffect, useState } from "react";
import {  healthcheck } from "./Services";
import { useNavigate } from "react-router";

export const authenticate = ()=>{

    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [loggedIn, setLoggedIn] = useState(false);

    function clearStorage(){
        setLoggedIn(false)
        localStorage.clear();
        navigate("/")
    }

    const isLoggedIn = () =>{
        console.log("checking isLoggedIn"+count)
        setCount(count+1)
        var token = localStorage.getItem("token")
        if(!token){
            return false;
        }else{
            return validateJWT();
        }
    }

    async function validateJWT(){
        await healthcheck().then((res)=>{
            console.log("validateJWT success..");
            return true;
        }).catch((error)=>{
            clearStorage();
            console.log("failed to authenticate..")
            return false;
            
        })   
    }

    const onAppReload = () =>{
        var token = localStorage.getItem("token")
        if(!token){
            clearStorage();
        }
        healthcheck().then((res)=>{
            console.log("onAppReload call");
            setLoggedIn(true)
        }).catch((error)=>{
            clearStorage();
        })    

    }

    return {loggedIn, onAppReload};
}
