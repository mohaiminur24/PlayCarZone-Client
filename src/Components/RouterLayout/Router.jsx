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
import MyToysPage from "../PageLayout/MyToysPage";
import PrivateRoute from "../AuthConfigrationLayout/PrivateRoute";

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
                element: <PrivateRoute><AddNewToy/></PrivateRoute>
            },
            {
                path:"/toydetails/:id",
                element: <PrivateRoute><ToysDetails/></PrivateRoute>
            },
            {
                path:'/alltoys',
                element: <AlltoysPage/>
            },
            {
                path: "mytoys",
                element: <PrivateRoute><MyToysPage/></PrivateRoute>
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