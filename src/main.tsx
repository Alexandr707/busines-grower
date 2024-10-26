import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { setFixedVH } from "./utils/setFixedVH.ts";
import { AppContextProvider } from "./context/AppContext/AppContextProvider.tsx";

//===================== установка фикчированного vh ================================================
setFixedVH();
window.addEventListener("resize", setFixedVH);
//==================================================================================================

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
