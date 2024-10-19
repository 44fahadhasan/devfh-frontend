import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("DEV.FH-Theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // theme value save to local storage
    localStorage.setItem("DEV.FH-Theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const data = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
