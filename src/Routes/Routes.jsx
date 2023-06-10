import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Error from "../Layout/Error";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/Signup";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instractor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instractor/MyClass/MyClass";

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
        {
          path: "instructors",
          element:<Instructor></Instructor>
        },
        {
          path: "classes",
          element:<Classes></Classes>
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
              element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },   
          {
              path:'myclasses',
              element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
            },   
          {
              path:'manageusers',
              element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },   
          {
              path:'manageclasses',
              element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
          }  
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