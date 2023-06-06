import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import ReactQuery from "./utils/reactQuery.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQuery>
      <RouterProvider router={router} />
    </ReactQuery>
  </React.StrictMode>
);
