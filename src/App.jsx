
import { useEffect } from "react";
import { authenticate } from "./utils/authenticate";
import MiniVariantDrawer from "./components/MiniVariantDrawer";
import { LoginPage } from "./pages/Login";
import { Container } from "@mui/material";
import { Welcome } from "./pages/Welcome";
import { HOME, LOGIN, REGISTER } from "./utils/path";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Register } from "./pages/Register";
import { Route, Routes, useNavigate } from "react-router";


export const App = () =>{

  const {loggedIn, onAppReload} = authenticate();

  useEffect(()=>{
    onAppReload();
  },[])

  if(loggedIn){
    console.log("recalling App.js loggedIn = true")
    return ( <>
          <PrivateRoute route={{
            path: HOME,
            element:  ()=> (<Welcome></Welcome>),
          }}/>
          
          <MiniVariantDrawer> 
          </MiniVariantDrawer> 
    </>
    );
}else{
  console.log("recalling loggedIn = false")
  return ( <>
        <Routes>
            <Route key={HOME} path={HOME} element={<LoginPage></LoginPage>} />
            <Route key={REGISTER} path={REGISTER} element={<Register></Register>} />
            <Route key={LOGIN} path={LOGIN} element={<LoginPage></LoginPage>} />
        </Routes>
  </>
  );
}


  
}

