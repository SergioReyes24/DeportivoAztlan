import { createBrowserRouter } from "react-router-dom";
import LandingDesktop from "../screens/LandingDesktop/LandingDesktop";
import AboutUs from "../screens/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingDesktop />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

export default router;
