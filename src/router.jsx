import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./error/Error";
import About from "./about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
