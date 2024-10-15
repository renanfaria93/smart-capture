// React
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Material MUI
import { CssBaseline, Box } from "@mui/material";

// Components
import MenuBar from "./components/MenuBar/MenuBar";
import TopBar from "./components/TopBar/TopBar";

// Context
import { KeycloakProvider } from "./context/keyclockContext";

//

function App() {
  const [open, setOpen] = useState(false);

  return (
    <KeycloakProvider>
      <Box sx={{ display: "flex", minHeight: "100%" }}>
        <CssBaseline />
        <TopBar open={open} setOpen={setOpen} />
        <BrowserRouter>
          <MenuBar open={open} setOpen={setOpen} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 2, bgcolor: "primary.light" }}
          >
            <Routes>
              {/* <Route path='/' element={<Home />} />
                <Route path='/flow' element={<FlowProvider><Flow /></FlowProvider>} />
                <Route path='/myflows' element={<Mapas />} />
                <Route path='/settings/*' element={<Settings />} /> */}
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </KeycloakProvider>
  );
}

export default App;
