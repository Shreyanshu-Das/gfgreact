
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Register from "./components/Register";
import UserDetails from "./components/UserDetails";


export const appRoutes=[
    
    {path:'/',element: <Navbar/>},
    {path:'/login',element: <Login/>},
    {path:'/portfolio',element: <Portfolio/>},
    {path:'/register',element: <Register/>},
    {path:'/userdetails',element: <UserDetails/>}
]
