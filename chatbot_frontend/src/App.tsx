import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import GlobalLayout from "./layouts/GlobalLayout";
import Login from "./pages/Login.tsx";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/signup"];

  if (noLayoutRoutes.includes(location.pathname)) return <>{children}</>;

  return <GlobalLayout>{children}</GlobalLayout>;
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
