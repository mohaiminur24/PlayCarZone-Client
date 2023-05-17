import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage";

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
    }
]);


export default router;