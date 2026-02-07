import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { getContactLoader } from './loaders/contactsLoader';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactLoader,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
