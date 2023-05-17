import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";

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
    }
]);


export default router;