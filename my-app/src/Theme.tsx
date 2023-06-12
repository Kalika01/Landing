import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import theme from "./theme/muiThemeConfig";

interface Props {
  children: React.ReactNode;
}

const Theme: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  const themeConfig = theme();

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
