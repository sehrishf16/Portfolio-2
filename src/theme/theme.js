import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#38BDF8",
    },

    secondary: {
      main: "#22D3EE",
    },

    background: {
      default: "#0B1120",
      paper: "#111827",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14,
  },
});

export default theme;