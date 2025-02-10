import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app/App";
import { ModalProvider } from "./app/context/modalContext/modalContext";
import { AuthProvider } from "./app/context/authContext/authContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
