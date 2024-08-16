import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./layout/Root.jsx";
import AuthProvider from "./firebaseAuth/AuthProvider.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import AllProducts from "./Pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />
    ,
    children: [
      {
        element: <Home/>,
        path: "/"
      },
      {
        element: <Login/>,
        path: "/login"
      },
      {
        element: <Registration/>,
        path: "/register"
      },
      {
        element: <AllProducts/>,
        path: "/all-products"
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
