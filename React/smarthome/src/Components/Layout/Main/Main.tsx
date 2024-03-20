import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainRoute from "../../Route/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import { Box, Grid } from "@mui/material";

const Main: React.FC = () => {
  return (
    <Grid container direction="column" style={{ paddingBottom: "70px" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid container item>
        <Grid item xs={1}>
          <Menu />
        </Grid>
        <Grid item xs={11} style={{ paddingLeft: 35 }}>
          <MainRoute />
        </Grid>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Main;
