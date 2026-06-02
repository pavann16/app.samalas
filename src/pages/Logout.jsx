import { useEffect } from "react";



export const Logout = ()=>{

    useEffect(()=>{
        if(confirm("You want to logout ?")){
            localStorage.clear();
            window.location="/";
        }else{
            window.location="/";
        }
    },[]);

    return (<div><h2>Logout is hereereerer</h2></div>);
}