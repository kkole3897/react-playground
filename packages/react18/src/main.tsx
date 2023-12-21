import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuspsnePage from "./pages/examples/Suspense.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/examples",
    children: [
      {
        path: "suspense",
        element: <SuspsnePage />,
      },
    ],
  },
]);

async function enableMocking() {
  if (
    import.meta.env.NODE_ENV !== "development" &&
    import.meta.env.VITE_MOCK_ENABLE !== "true"
  ) {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
