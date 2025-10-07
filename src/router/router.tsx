import { createBrowserRouter } from "react-router-dom";
import LandingDesktop from "../screens/LandingDesktop/LandingDesktop";
import AboutUs from "../screens/AboutUs/AboutUs";
import Contact from "../screens/Contact/Contact";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingDesktop />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
