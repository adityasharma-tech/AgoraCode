import "./index.css";
import App from "./app";
import Dashboard from "./app/dashboard";
import Workspace from "./app/workspace"; 

import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router";

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
        <Route path="workspace/:id" element={<Workspace/>}/>
      </Routes>
    </ClerkProvider>
  </BrowserRouter>
);
