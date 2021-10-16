import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import auth_config from "../auth_config.json"

ReactDOM.render(
  <Auth0Provider
    domain={auth_config.domain}
    clientId={auth_config.clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
