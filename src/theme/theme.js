import { createTheme } from "@mui/material/styles";
import { grey, teal, pink } from "@mui/material/colors";

// Importação da fonte "Inter" de forma online via Google Fonts
import "@fontsource/inter";

const theme = createTheme({
  palette: {
    mode: "dark", // Tema escuro
    primary: {
      main: teal[400], // Cor principal moderna: teal
      light: teal[200], // Versão mais clara para variações
      dark: teal[700], // Versão mais escura para contrastes
    },
    secondary: {
      main: pink[400], // Cor secundária vibrante: rosa
      light: pink[200],
      dark: pink[700],
    },
    background: {
      default: grey[900], // Fundo escuro elegante
      paper: grey[800], // Fundo de elementos, mais claro que o background
    },
    text: {
      primary: "#FFFFFF", // Texto principal branco para contraste
      secondary: grey[400], // Texto secundário para suavidade
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif", // Fonte moderna com fallback
    h1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      letterSpacing: "-0.015em",
    },
    h2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: grey[200], // Texto mais suave para leitura
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Botões com bordas levemente arredondadas
          textTransform: "none", // Sem transformar em maiúsculas
        },
      },
    },
  },
});

export default theme;
