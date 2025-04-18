import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
// import ReadList from "../Pages/readList/ReadList";
import PagesToRead from "../Pages/pagesToRead/PagesToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/readList/ReadList";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      // errorElement:<p>Error</p>,
      children:[
        {
          index:true,
           loader: ()=> fetch('../booksData.json'),
            Component:Home,
            errorElement:<p>Error Home</p>,
        
          },
          {
            path:'/BookDetails/:id',
            loader: ()=> fetch('../booksData.json'),
            Component:BookDetails,
            errorElement:<p>Error readList</p>
          },
          {
            path:'readList',
            Component:ReadList
          },
          {
            path:'pagesToRead',
            Component:PagesToRead,
            errorElement:<p>Error pagesToRead</p>,
          }
      ]
    },
  ]);