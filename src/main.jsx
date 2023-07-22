import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthPorvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Toaster />
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
