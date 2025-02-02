import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/thumbnail" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Thumbnail
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/one" style={{ color: "#87CEFA", textDecoration: "none" }}>
            One
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/designsystem" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DesignSystem
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev1desktop1920px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV1desktop1920px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev1desktop1440px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV1desktop1440px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev1desktop1152px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV1desktop1152px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev2desktop1920px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV2desktop1920px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev2desktop1440px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV2desktop1440px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagev2desktop1152px" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingpageV2desktop1152px
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/logo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Logo
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
