import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Criar } from "./Criar";
import { Vagas } from "./Vagas";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/vagas",
        element: <Vagas />,
      },
      {
        path: "/criar",
        element: <Criar />,
      },
    ],
  },
]);
