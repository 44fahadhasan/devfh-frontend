import AnimatedCursor from "react-animated-cursor";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "../context/ThemeProvider";
import routes from "../routes/Routes";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AnimatedCursor
          color="99, 102, 241"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0.2}
        />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
};

export default App;
