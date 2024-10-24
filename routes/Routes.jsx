import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/common/Error";
import Home from "../pages/main/Home";
import Projects from "../pages/main/Projects";

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
