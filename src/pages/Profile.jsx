import { useEffect } from "react"
import { Button, Container, Paper } from "@mui/material";
import { fetchProfileInfo } from "../utils/Services";

export const Profile= ()=>{

    useEffect(()=>{
    },[]);

    async function fetchUseEffect(){
        await fetchProfileInfo().then((res)=>{

        }).catch((err)=>{
            console.log("error: ",err)
        })

    }

    return (<div >
            <Container style={{display: "flex", flexDirection: "row"}}>
            </Container>    
            <Container style={{display: "flex", flexDirection: "row"}}>
                        <Container style={{paddingLeft:10, paddingTop:30}}><img src="/content/pictures/image1.jpg" width="900" height="500"/></Container>
            </Container>
    </div>)


}