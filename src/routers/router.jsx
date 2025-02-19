import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Home/ErrorPage";
import Home from "../Home/Home";
import Projects from "../Home/Projects";
import ProjectsDetail from "../Home/ProjectsDetail";
import Skills from "../Home/Skills";
import About from "../Home/About";
import Contact from "../Home/Contact";


export const router = createBrowserRouter([
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
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/projects/:id",
        element: <ProjectsDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
