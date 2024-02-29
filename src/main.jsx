import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx'
import Skills from "./routes/Skills.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from './routes/Contact.jsx'
import ProjectsDetail from './routes/ProjectsDetail.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/ProjectsDetail",
        element: <ProjectsDetail />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
