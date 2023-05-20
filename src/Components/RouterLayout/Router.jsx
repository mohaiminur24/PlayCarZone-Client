import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import RegistrationPage from "../PageLayout/RegistrationPage";
import BlogPage from "../PageLayout/BlogPage";
import ErrorPage from "../ShareableComponents/ErrorPage";
import AddNewToy from "../PageLayout/AddNewToy";
import ToysDetails from "../ShareableComponents/Homepagecomponent/ToysDetails";
import AlltoysPage from "../PageLayout/AlltoysPage";
import UpdateToys from "../ShareableComponents/UpdateToys";
import MyToysPage from "../PageLayout/MyToysPage";

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
            },
            {
                path:'/addtoy',
                element: <AddNewToy/>
            },
            {
                path:"/toydetails/:id",
                element: <ToysDetails/>
            },
            {
                path:'/alltoys',
                element: <AlltoysPage/>
            },
            {
                path: '/updateroute/:id',
                element: <UpdateToys/>
            },
            {
                path: "mytoys",
                element: <MyToysPage/>
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