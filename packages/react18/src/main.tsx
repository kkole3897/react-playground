import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SuspsnePage from "./pages/examples/Suspense.tsx";
import SuspenseWithReactQueryPage from "./pages/examples/SuspenseWithReactQuery.tsx";

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
      {
        path: "suspense-with-react-query",
        element: <SuspenseWithReactQueryPage />,
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

const queryClient = new QueryClient();

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
