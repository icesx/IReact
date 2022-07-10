import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404,
  Services,
  History,
  Location
} from "./pages";

const RouteElement = () => useRoutes([
  { path: "/", element: <Home /> },
  {
    path: "about",
    element: <About />,
    children: [
      {
        path: "services",
        element: <Services />
      },
      { path: "history", element: <History /> },
      {
        path: "location",
        element: <Location />
      }
    ]
  },
  { path: "events", element: <Events /> },
  { path: "products", element: <Products /> },
  { path: "contact", element: <Contact /> },
  { path: "*", element: <Whoops404 /> },
  {
    path: "services",
    redirectTo: "about/services"
  }
]);
function TheRouter() {
  return (<BrowserRouter><RouteElement /></BrowserRouter>);
}
export default TheRouter;

