import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Error from "./components/404.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Snap from "./components/Snap";
import SnapDataProvider from "./providers/SnapDataProvider";
import CreateSnap from "./components/CreateSnap.jsx";
import UpdateSnap from "./components/UpdateSnap.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Snap />,
      },
      {
        path: "/create",
        element: <CreateSnap />,
      },
      {
        path: "/edit/:snapId",
        element: <UpdateSnap />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnapDataProvider>
      <RouterProvider router={router} />
    </SnapDataProvider>
  </React.StrictMode>
);
