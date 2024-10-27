import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import TopLoadingBar from "../components/Loading/TopLoadingBar";
import NavigateScrollToTop from "../components/Scroll/NavigateScrollToTop";
import Main from "../layouts/Main";
import Error from "../pages/common/Error";

// lazy load route pages
const Home = lazy(() => import("../pages/main/Home"));
const Projects = lazy(() => import("../pages/main/Projects"));

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: (
      <>
        <Main />

        {/* scroll to top on every route navigate */}
        <NavigateScrollToTop />
      </>
    ),
    errorElement: <Error />,
    children: [
      // public routes
      {
        index: true,
        element: (
          <Suspense fallback={<TopLoadingBar />}>
            <Home />,
          </Suspense>
        ),
      },
      {
        path: "/Projects",
        element: (
          <Suspense fallback={<TopLoadingBar />}>
            <Projects />,
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
