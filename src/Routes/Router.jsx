import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/SectionTitle/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/ourShop",
          element: <PrivateRoute><OurShop></OurShop></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        }
      ]
    }
  ]);