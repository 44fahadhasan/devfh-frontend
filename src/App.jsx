import { RouterProvider } from "react-router-dom";
import ThemeProvider from "../context/ThemeProvider";
import routes from "../routes/Routes";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
};

export default App;
