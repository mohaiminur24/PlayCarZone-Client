import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import RegistrationPage from "../PageLayout/RegistrationPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/registration",
        element: <RegistrationPage/>
    }
]);


export default router;