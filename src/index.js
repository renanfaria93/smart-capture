import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Importações necessárias para aplicar o tema
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme"; // Certifique-se de que o arquivo theme.js existe

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Envolver a aplicação no ThemeProvider */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Para medir performance da aplicação
reportWebVitals();
