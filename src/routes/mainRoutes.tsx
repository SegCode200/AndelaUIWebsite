import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingPage from "../pages/LandingScreen/LandingPage"
import Engineer from "../pages/Engineer"
import Enterprise from "../pages/Enterprise"


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                index:true,
                element: <LandingPage/>
            }, 
            {
                path: "/forengineer",
                element: <Engineer/>
            },
            {
                path: "/enterprise",
                element: <Enterprise/>
            }
        ]
    }
])
