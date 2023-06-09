import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Error from "../Layout/Error";
import Main from "../Layout/Main";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "login",
          element:<Login></Login>
        },
        {
          path: "signup",
          element:<SignUp></SignUp>
        },

    ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
          {
              path:'addclass',
              element:<AddClass></AddClass>
          },   
          {
              path:'manageusers',
              element:<ManageUsers></ManageUsers>
          },   
      ]
  },
    {
      path:'/',
      element:<Error></Error>,
      children:[
          {
              path:'*',
              element:<ErrorPage></ErrorPage>
          }   
      ]
  },
  ]);