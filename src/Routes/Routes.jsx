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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructors/Instructor";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/Dashboard/Instractor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instractor/MyClass/MyClass";
import SelectedClass from "../Pages/Dashboard/User/SelectedClass/SelectedClass";
import UpdateMyClass from "../Pages/Dashboard/Instractor/MyClass/UpdateMyClass";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import MyEnrolledClass from "../Pages/Dashboard/User/EnrolledClass/MyEnrolledClass";
import PaymentHistory from "../Pages/Dashboard/User/Payment/PaymentHistory";

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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
              path:'myclasses/:id',
              element:<InstructorRoute><UpdateMyClass></UpdateMyClass></InstructorRoute>,
              loader: ({params}) => fetch(`https://sports-school-server-theta.vercel.app/getupdateclass/${params.id}`)
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
              path:'selectedclass',
              element:<PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
          },  
          {
              path:'selectedclass/payment/:id',
              element:<PrivateRoute><Payment></Payment></PrivateRoute>,
              loader: ({params}) => fetch(`https://sports-school-server-theta.vercel.app/payment/${params.id}`)
          },  
          {
              path:'enrolledclass',
              element:<PrivateRoute><MyEnrolledClass></MyEnrolledClass></PrivateRoute>
          },  
          {
              path:'paymenthistory',
              element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
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