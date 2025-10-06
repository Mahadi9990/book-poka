import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Banner from "../components/Banner";
import BookList from "../components/BookList";
import PagesToRead from "../components/PagesToRead";

export const AllRoute = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children:[{
      index:true,
      path:"/",
      Component:Banner
    },{
      path:"/book-list",
      Component:BookList
    },{
      path:"/page-to-read",
      Component:PagesToRead
    }
  ]
  }
])

