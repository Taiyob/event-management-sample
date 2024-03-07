import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../root/Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetail from "../partial/ServiceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service/:id",
        element: (
          <ServiceDetail></ServiceDetail>
          // <PrivateRoute>
          //   <ServiceDetail></ServiceDetail>
          // </PrivateRoute>
        ), 
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default router;
