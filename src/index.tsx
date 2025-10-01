import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingDesktop } from "./screens/LandingDesktop/LandingDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingDesktop />
  </StrictMode>,
);
