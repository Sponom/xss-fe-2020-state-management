import React, { useState } from "react";
export const ThemeHooksContext = React.createContext({});

const ThemeHooksContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeHooksContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeHooksContext.Provider>
  );
};

export default ThemeHooksContextProvider;
