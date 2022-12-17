 import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthCProvider } from "./context/AuthC";
import { ChatCProvider } from "./context/ChatC";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthCProvider>
    <ChatCProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatCProvider>
  </AuthCProvider>
);