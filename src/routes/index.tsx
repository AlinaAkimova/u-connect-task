import { createBrowserRouter, Navigate } from "react-router-dom";

// Routes
import PCPage from "./PCPage/PCPage";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="pcs" />,
  },
  {
    path: "/pcs",
    element: <PCPage />,
  },
]);
