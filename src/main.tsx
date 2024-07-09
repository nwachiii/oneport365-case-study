import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "currency-flags/dist/currency-flags.min.css";

console.log("Main entry file is being processed");

const errorElement = <ErrorPage />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "add-quote",
        element: <AddEditQuote />,
      },
      {
        path: "edit-quote/:id",
        element: <AddEditQuote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <RouterProvider router={router}></RouterProvider>
      </NotificationProvider>
    </Provider>
  </React.StrictMode>
);

console.log("ReactDOM.createRoot has been called");
