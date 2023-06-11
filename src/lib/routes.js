import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";
import Layout from "../components/layout";
import Loginpage from "../components/Loginpage";


export const ROOT = "/";
export const LOGIN ="/Login";
export const REGISTER ="/register";
export const PROTECTED ="/protected";
export const LOGINPAGE ="/protected/loginpage";


export const router = createBrowserRouter ([
    {path: ROOT, element: "Public Root"},
    {path: LOGIN, element: <Login></Login>},
    {path: REGISTER, element: <Register></Register>},

    {path: PROTECTED, element : <Layout></Layout>, children: [
        {
            path: LOGINPAGE,
            element: <Loginpage></Loginpage>,
            
        }
       
    ]},
   

]);