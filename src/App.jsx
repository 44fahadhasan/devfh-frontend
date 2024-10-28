// import AnimatedCursor from "react-animated-cursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import DataProvider from "../context/DataProvider";
import ThemeProvider from "../context/ThemeProvider";
import routes from "../routes/Routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <ThemeProvider>
            <RouterProvider router={routes} />

            {/* cursor customization */}
            {/* <AnimatedCursor
            color="99, 102, 241"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0.2}
          /> */}
          </ThemeProvider>
        </DataProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
