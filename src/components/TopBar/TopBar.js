import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import favicon from "../../assets/favicon.ico";
import { ReactComponent as LogoAmbev } from "../../assets/abinbev-logo-white.svg";
import styles from "./styles.module.css";
import { KeycloakContext } from "../../context/keyclockContext";

const TopBar = ({ open, setOpen }) => {
  const { keycloak, dataUser, userID } = useContext(KeycloakContext);

  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login(); // Trigger login if user is not authenticated
    }
  }, [keycloak]); // Run effect only when keycloak changes

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLogin = () => {
    keycloak.login();
  };

  const handleLogout = () => {
    if (dataUser) {
      keycloak.logout({ redirectUri: window.location.href });
    }
  };

  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <LogoAmbev style={{ width: "220px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <img
                src={favicon}
                alt="Logo Abinbev"
                width={"42px"}
                style={{ backgroundColor: "white" }}
              />
              Smart Capture
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "8px",
              width: "100%",
              alignItems: "center",
            }}
          >
            {!dataUser ? (
              <AccountCircleIcon
                className={styles.loginIcon}
                onClick={handleLogin} // Changed to handleLogin
              />
            ) : (
              <>
                <LogoutIcon
                  className={styles.loginIcon}
                  onClick={handleLogout} // Changed to handleLogout
                />
                <Typography variant="subtitle2" noWrap component="div">
                  {dataUser.name}{" "}
                  {/* Display user ID or any relevant user info */}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
