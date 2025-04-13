import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminPage } from './screens/Admin/AdminPage';
import { MainLayout } from "./components/layout/MainLayout";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Admin route without MainLayout */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* All other routes with MainLayout */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
