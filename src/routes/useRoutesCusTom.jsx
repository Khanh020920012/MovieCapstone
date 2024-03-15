import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

export default function useRoutesCusTom() {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return routes;
}
