import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./component/nav";
import Project from "./component/project";
import About from "./component/about.jsx";
import Contact from "./component/contact";
import Home from "./component/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function AppLayout() {
  return (
    <>
      
      <div className="applayout">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);