import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Index from './App'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/projects',
    element: <Projects />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);  