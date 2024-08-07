import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const CustomMenuBox = styled(Box)({
  background: "linear-gradient(145deg, #0A0A0A, #2A2A2A)",
  padding: "20px",
  color: "white",
  height: "100%",
});

function Menu(): JSX.Element {
  return (
    <CustomMenuBox>
      <Typography variant="h6" gutterBottom>
        Navigation Menu
      </Typography>
      <Link
        component={NavLink}
        to="/"
        color="inherit"
        underline="none"
        sx={{
          display: "block",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "5px",
          margin: "5px 0",
          "&:hover": { backgroundColor: "#115293" },
        }}
      >
        Video List
      </Link>
      <Link
        component={NavLink}
        to="/addVideo"
        color="inherit"
        underline="none"
        sx={{
          display: "block",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "5px",
          margin: "5px 0",
          "&:hover": { backgroundColor: "#115293" },
        }}
      >
        Add New Video
      </Link>
      <Link
        component={NavLink}
        to="/about"
        color="inherit"
        underline="none"
        sx={{
          display: "block",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "5px",
          margin: "5px 0",
          "&:hover": { backgroundColor: "#115293" },
        }}
      >
        About Me
      </Link>
    </CustomMenuBox>
  );
}

export default Menu;
