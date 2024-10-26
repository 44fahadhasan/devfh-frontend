import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/common/Error";

// lazy load route pages
const Home = lazy(() => import("../pages/main/Home"));
const Projects = lazy(() => import("../pages/main/Projects"));

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      // public routes
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
    ],
  },
]);

export default routes;
