import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
