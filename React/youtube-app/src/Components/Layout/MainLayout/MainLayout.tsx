import React from "react";
import MainRoute from "../../Route/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MainLayoutRoot = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `
    "header header"
    "menu main"
    "footer footer"
  `,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "minmax(200px, auto) 1fr",
  height: "100vh",
}));

function MainLayout(): JSX.Element {
  return (
    <MainLayoutRoot>
      <Box component="header" sx={{ gridArea: "header" }}>
        <Header />
      </Box>
      <Box component="aside" sx={{ gridArea: "menu" }}>
        <Menu />
      </Box>
      <Box component="main" sx={{ gridArea: "main" }}>
        <MainRoute />
      </Box>
      <Box component="footer" sx={{ gridArea: "footer" }}>
        <Footer />
      </Box>
    </MainLayoutRoot>
  );
}

export default MainLayout;
