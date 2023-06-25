import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const theme = {
  palette: {
    primary: {
      dark: "#2B6EFD",
      main: "#d0e1ff",
      light: "#9ec5fe",
    },
    secondary: {
      dark: "#6C757D",
      main: "#e2e3e5",
      light: "#C4CbCB",
    },
    success: {
      dark: "#288758",
      main: "#d1e7de",
      light: "#A3CFBB",
    },
    danger: {
      dark: "#DC3545",
      main: "#F9D7DA",
      light: "#F1AEB5",
    },
    warning: {
      dark: "#F9C108",
      main: "#FFF3CD",
      light: "#FFE69C",
    },
    info: {
      dark: "#44CAEF",
      main: "#CFF4FC",
      light: "#9EEAF9",
    },
  },
  sizes: {
    font: {
      lg: "1.25em",
      md: "1em",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;
