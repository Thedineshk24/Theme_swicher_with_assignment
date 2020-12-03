import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggler = () => {
  const [ThemeMode, SetThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        SetThemeMode(ThemeMode === "light" ? "dark" : "light");
      }}
    >
      <pre>{ThemeMode === "light" ? "TurnOff Light" : "Light on"}</pre>
    </div>
  );
};

export default ThemeToggler;
