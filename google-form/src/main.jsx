import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import BasicInfoForm from "./components/BasicInfoForm";
import ConfirmationPage from "./components/ConfirmationPage";
import FamilyRelationsForm from './components/FamilyRelationsForm';
import MedicalHistoryForm from './components/MedicalHistoryForm';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicInfoForm />,
  },
  {
    path: "/medical",
    element: <MedicalHistoryForm />
  },
  {
    path: "/family",
    element: <FamilyRelationsForm />
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