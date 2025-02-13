import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import { Home } from "./screens/Home";
import { MainLayout } from "./components/layout/MainLayout";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Home />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>,
);
