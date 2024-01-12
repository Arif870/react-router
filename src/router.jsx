import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Error from "./error/Error";
import About from "./about/About";
import Friends from "./friends/Friends";
import FriendDetails from "./friends/FriendDetails";

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
        path: "/friends/:friendId",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
