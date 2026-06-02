import { useEffect } from "react"
import { Button, Container, Paper } from "@mui/material";
import { fetchProfileInfo } from "../utils/Services";

export const DeepikaProfile= ()=>{

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
                        <Container style={{paddingLeft:10, paddingTop:30}}><img src="/content/pictures/image2.jpg" width="900" height="500"/></Container>
            </Container>
            <Container style={{display: "flex", flexDirection: "row"}}>
                        <Container style={{paddingLeft:10, paddingTop:30}}><img src="/content/pictures/image5.jpg" width="900" height="500"/></Container>
            </Container>
            <Container style={{display: "flex", flexDirection: "row"}}>
                        <Container style={{paddingLeft:10, paddingTop:30}}><img src="/content/pictures/image4.jpg" width="900" height="530"/></Container>
            </Container>
            <Container style={{display: "flex", flexDirection: "row"}}>
                        <Container style={{paddingLeft:10, paddingTop:30}}><img src="/content/pictures/image3.jpg" width="900" height="500"/></Container>
            </Container>
    </div>)


}