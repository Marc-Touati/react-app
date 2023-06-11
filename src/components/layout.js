import {useEffect} from "react";
import {Outlet, useNavigate, useLocation} from"react-router-dom";
import { LOGINPAGE } from "../lib/routes";
import { useAuth } from "../hooks/auth";
import Navbar from "./navbar";

export default function Layout() {
    const {pathname} = useLocation();
    
    const navigate = useNavigate();

    const {user, isLoading } = useAuth();

    console.log("isLoading:", isLoading);
    console.log("user:", user);

    
    useEffect(()=>{
        if(isLoading&& pathname.startsWith("/protected") && !user){
            navigate(LOGINPAGE);
        }
    }, [pathname, user, isLoading]);
    if (isLoading) return "Loading..."; 
    return (
    <>
    <Navbar></Navbar> <Outlet></Outlet>
    </>);
}