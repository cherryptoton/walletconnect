import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "./styles/navbar.scss";
import "./styles/hero.scss";
import "./styles/general.scss";
import "./styles/choose.scss";
import "./styles/wallet.scss";

// Components
import App from "./App";
import Wallet from "./pages/Wallet";
import Success from "./pages/Sucess";
import AccessPage from "./pages/Access";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wallets",
    element: <Wallet />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/access",
    element: <AccessPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// lava injury chuckle able ozone pelican stadium noodle task peasant orange biology
