import React from "react";
import ReactDOM from "react-dom/client";
import { PacientesProvider } from "./context/Context";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PacientesProvider>
            <App />
        </PacientesProvider>
    </React.StrictMode>
);
