import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { authenticate } from "./authenticate";

export const PrivateRoute = ({route}) =>{


    return (<Routes>
            {<Route key={route.path} path={route.path} element={<route.element />} />}
        </Routes>);
}