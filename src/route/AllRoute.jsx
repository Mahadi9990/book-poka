import { createBrowserRouter } from "react-router";
import Main from "../pages/Main";
import Banner from "../components/Banner";
import About from "../pages/About";
import BooksDetails from "../components/BooksDetails";

export const AllRoute = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children:[{
      index:true,
      loader:()=>fetch('./booksData.json'),
      path:"/",
      Component:Banner
    },{
      path:"/about",
      Component:About
    },{
      path:"/bookDetails/:id",
      loader:()=>fetch('./booksData.json'),
      Component:BooksDetails
    }
  ]
  }
])

