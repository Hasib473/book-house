import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import ListedBook from './Pages/Listed-book/Listed-book.jsx';
import PageToRead from './Pages/Page-to-read/PageToRead.jsx';
import BookDetails from './Pages/bookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children:[
      {index:true,
      loader:()=>fetch('booksData.json'),
        
      Component:Home},
      {path:'/listed-books',
        loader:()=>fetch('booksData.json'),
       Component:ListedBook},

      {path:'/pages-to-read', Component:PageToRead},

      {path:'/bookDetails/:bookId',
        loader:()=>fetch(`booksData.json`),
        Component:BookDetails
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
