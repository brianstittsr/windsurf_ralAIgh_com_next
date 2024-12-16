import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Thumbnail from "pages/Thumbnail";
import One from "pages/One";
import DesignSystem from "pages/DesignSystem";
import LandingpageV1desktop1920px from "pages/LandingpageV1desktop1920px";
import LandingpageV1desktop1440px from "pages/LandingpageV1desktop1440px";
import LandingpageV1desktop1152px from "pages/LandingpageV1desktop1152px";
import LandingpageV2desktop1920px from "pages/LandingpageV2desktop1920px";
import LandingpageV2desktop1440px from "pages/LandingpageV2desktop1440px";
import LandingpageV2desktop1152px from "pages/LandingpageV2desktop1152px";
import Logo from "pages/Logo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "thumbnail",
      element: <Thumbnail />,
    },
    {
      path: "one",
      element: <One />,
    },
    {
      path: "designsystem",
      element: <DesignSystem />,
    },
    {
      path: "landingpagev1desktop1920px",
      element: <LandingpageV1desktop1920px />,
    },
    {
      path: "landingpagev1desktop1440px",
      element: <LandingpageV1desktop1440px />,
    },
    {
      path: "landingpagev1desktop1152px",
      element: <LandingpageV1desktop1152px />,
    },
    {
      path: "landingpagev2desktop1920px",
      element: <LandingpageV2desktop1920px />,
    },
    {
      path: "landingpagev2desktop1440px",
      element: <LandingpageV2desktop1440px />,
    },
    {
      path: "landingpagev2desktop1152px",
      element: <LandingpageV2desktop1152px />,
    },
    {
      path: "logo",
      element: <Logo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
