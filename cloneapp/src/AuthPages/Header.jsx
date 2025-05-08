import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleThemeButton from "../Components/ToggleThemeButton";
import { Box, useTheme } from "@mui/material";

const Headerr = () => {
  const theme = useTheme();
  const notificationCount = 5;

  const isDark = theme.palette.mode === "dark";
  const textColor = isDark ? "text-light" : "text-dark";
  const bgColor = isDark ? "bg-dark" : "bg-white";

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <nav
        className={`navbar navbar-expand-lg ${bgColor} shadow-sm py-2 px-3 fixed-top`}
      >
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <Link to="/" className="navbar-brand text-base fw-semibold">
            <i className="bi bi-linkedin fs-1 text-primary" />
          </Link>

          {/* Theme Toggle Button */}
          <div>
            <ToggleThemeButton />
          </div>
        </div>
      </nav>
    </Box>
  );
};

export default Headerr;
