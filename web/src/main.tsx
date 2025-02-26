import "./index.css";
import App from "./app";

import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./app/dashboard";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </ClerkProvider>
  </BrowserRouter>
);
