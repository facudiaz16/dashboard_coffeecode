import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"
import ErrorPage from "./Error-Page";
import Root from "./components/Root";
import LastProductInDb from "./components/LastProductInDb";
import ContentRowProducts from "./components/ContentRowProducts";
import CategoriesInDb from "./components/CategoriesInDB";
import Chart from "./components/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Root /> },
          {
            path: "/last-product-in-db",
            element: <LastProductInDb />,
          },
          {
            path: "/total",
            element: <ContentRowProducts />
          },
          {
            path: "/tipos-cafes",
            element: <CategoriesInDb />
          },
          {
            path: "/lista-productos",
            element: <Chart />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);