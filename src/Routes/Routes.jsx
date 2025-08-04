import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import App from "../App";
import Home from "../Pages/Home/Home";
import OurWorks from "@/Pages/OurWorks/OurWorks";
import Services from "@/Pages/Services/Services";
import Contact from "@/Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/our-work",
        element: <OurWorks />
      },
      {
        path: "/service",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
]);

export default router;
