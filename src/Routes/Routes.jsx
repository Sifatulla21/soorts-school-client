import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../Layout/Error";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";

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
          path: "/login",
          element:<Login></Login>
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