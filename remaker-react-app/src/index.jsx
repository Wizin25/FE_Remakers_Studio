import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home";
import { MainLayout } from "./components/layout/MainLayout";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </StrictMode>,
);
