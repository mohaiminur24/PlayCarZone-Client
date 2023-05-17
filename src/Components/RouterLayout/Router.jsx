import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import RegistrationPage from "../PageLayout/RegistrationPage";
import BlogPage from "../PageLayout/BlogPage";
import ErrorPage from "../ShareableComponents/ErrorPage";
import LoadingData from "../ShareableComponents/LoadingData";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path: "/blog",
                element: <BlogPage/>
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