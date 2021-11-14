import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import auth_config from "../auth_config.json"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./components/atoms/color/Theme"
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Auth0Provider
        domain={auth_config.domain}
        clientId={auth_config.clientId}
        redirectUri={window.location.origin}
        audience={auth_config.audience}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById("root")
);
