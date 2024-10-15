import React, { createContext, useState, useEffect } from "react";
import Keycloak from "keycloak-js";

const KeycloakContext = createContext();

const initOptions = {
  url: `http://${window.location.hostname}:1910/`,
  realm: "guarulhos",
  clientId: "smart-capture",
};

const keycloak = new Keycloak(initOptions);

const KeycloakProvider = ({ children }) => {
  const [kcInitialized, setKcInitialized] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const [userID, setUserID] = useState(null);

  const onKeycloakTokens = () => {
    if (keycloak.authenticated) {
      setDataUser(keycloak.tokenParsed);
      setUserID(keycloak.tokenParsed.sub);
    } else {
      setDataUser(null);
      setUserID(null);
    }
  };

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        console.log("Keycloak instance:", keycloak);

        const auth = await keycloak.init({
          onLoad: "login-required",
          checkLoginIframe: true,
          pkceMethod: "S256",
        });

        if (!auth) {
          console.log("User is not authenticated, reloading the page.");
          window.location.reload();
        } else {
          console.log("Keycloak initialized successfully.");
          setKcInitialized(true);
          onKeycloakTokens();
        }
      } catch (e) {
        console.error("Failed to initialize Keycloak:", e?.message || e);
      }
    };

    initKeycloak();
  }, []);

  return (
    <KeycloakContext.Provider
      value={{
        keycloak,
        dataUser,
        userID,
      }}
    >
      {kcInitialized && children}
    </KeycloakContext.Provider>
  );
};

export { KeycloakContext, KeycloakProvider };
