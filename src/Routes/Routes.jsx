import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ReadList from "../Pages/readList/ReadList";
import PagesToRead from "../Pages/pagesToRead/PagesToRead";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children:[
        {
          index:true,
           path:'/',
           loader: ()=> fetch('../booksData.json'),
            Component:Home
          },
          {
            path:'readList',
            element:<ReadList></ReadList>
          },
          {
            path:'pagesToRead',
            Component:PagesToRead
          }
      ]
    },
  ]);