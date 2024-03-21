import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import BasicInfoForm from "./components/BasicInfoForm";
import ConfirmationPage from "./components/ConfirmationPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicInfoForm />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  }, 
  {
    path: "*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);