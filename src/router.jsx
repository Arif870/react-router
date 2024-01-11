import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./error/Error";
import About from "./about/About";
import Friends from "./friends/Friends";

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
        path: "/friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
