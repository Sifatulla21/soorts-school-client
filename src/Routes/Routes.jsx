import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Error from "../Layout/Error";
import Main from "../Layout/Main";
import MyClass from "../Pages/Dashboard/Instractor/MyClass/MyClass";
import AddClass from "../Pages/Dashboard/Instractor/AddClass/AddClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import InstractorRoute from "./InstractorRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import Feedback from "../Pages/Dashboard/Admin/ManageClass/Feedback";

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
      // element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      element:<Dashboard></Dashboard>,
      children:[
          {
              path:'addclass',
              element:<InstractorRoute><AddClass></AddClass></InstractorRoute>
            },   
          {
              path:'myclasses',
              element:<InstractorRoute><MyClass></MyClass></InstractorRoute>
            },   
          {
              path:'manageusers',
              element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },   
          {
              path:'manageclasses',
              element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
          },   
          {
              path:'manageclasses/feedback',
              element:<AdminRoute><Feedback></Feedback></AdminRoute>
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