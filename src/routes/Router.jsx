import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import AboutMe from "../pages/AboutSection.jsx";
import Services from "../pages/Services.jsx";
import Skills from "../pages/SkillsSection.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutMe /> },
      { path: "services", element: <Services /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
