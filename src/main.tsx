import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyContextProvider } from "./context/MyContext.tsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
