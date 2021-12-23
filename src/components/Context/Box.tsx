import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = (): JSX.Element => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme context
    </div>
  );
};
