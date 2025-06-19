
import { useEffect, useState } from "react";
import {fetchServerInfo} from "../utils/Services.jsx"
import { Box, Checkbox, Container, Paper } from "@mui/material";
import Label from "../components/Label.jsx";

export const SystemConfigurationPage = () =>{
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("Unknown Connection");
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await fetchServerInfo()
      .then((response) => {
        console.log(response);
        setStatus(true);
        setMessage(response.data)
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  }

  return (
    <>
      <div style={{ padding: 20, height:200 }}>
        <Container style={{ padding: 20 }}></Container>
        <Paper  style={{ height:200 }}>
            <div style={{ padding:10 }}><Label>Is Backend Connected ?
            <Checkbox checked={status}></Checkbox>
            </Label></div>
        
        <Container style={{ paddingTop: 30 }}>
        <Label>Application Status : 
            </Label>
            <h4>{message}</h4>
            </Container>
        </Paper>
        
      </div>
    </>
  );
}