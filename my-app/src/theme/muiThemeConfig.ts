import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = () =>
  createTheme({
    palette: {},
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: 28,
            fontWeight: 700,
            color: colors.primary,
          },
          h2: {
            fontSize: 24,
            fontWeight: 700,
            color: colors.primary,
          },
          h3: {
            fontSize: 20,
            fontWeight: 700,
            color: colors.primary,
          },
          h4: {
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 3,
            textAlign: "center",
            borderRadius: "8px",
            width: "222px",
            height: "49px",
          },
          body1: {
            fontSize: 18,
            fontWeight: 400,
            color: colors.primary,
          },
          subtitle1: {
            fontSize: 16,
            fontWeight: 400,
            color: colors.subTitle,
          },
          subtitle2: {
            fontSize: 14,
            fontWeight: 300,
            color: colors.subTitle,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          contained: {
            background: colors.buttonBG,
            width: 127,
            height: 52,
            fontSize: 16,
            fontWeight: 600,
            color: colors.white,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: colors.white,
            maxWidth: 1400,
            minHeight: 164,
            boxShadow:
              "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
            borderRadius: 8,
            "@media(max-width: 780px)": {
              background: colors.cardMobileBG,
            },
          },
        },
      },
    },
  });

export default theme;
