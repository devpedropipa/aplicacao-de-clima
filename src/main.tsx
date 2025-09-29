import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; /* Configuração geral */
import "./styles/media-queries.css"; /* Torna o site responsivo */
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
