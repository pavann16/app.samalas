import { Container } from "@mui/material"

export const Welcome = ()=>{

return (<><div>
    <Container style={{display: "flex", flexDirection: "row"}}>
                        <Container style={{paddingLeft:200, paddingTop:100}}><img src="/content/pictures/welcome.png" width="900" height="500"/></Container>
            </Container>
    </div></>)

}