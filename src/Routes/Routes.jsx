import {
    createBrowserRouter,
  } from "react-router";
import App from "../App";
import Root from "../Root/Root";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root
    },
  ]);