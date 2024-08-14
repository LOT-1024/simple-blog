import { useRoutes } from "react-router-dom";
import { Blog, CreateBlog, Home, MainLayout } from "../page";

const route = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>404 No Page</h1>,
  },
];

const RouterApp = () => {
  const routes = useRoutes(route);
  return routes;
};

export default RouterApp;
