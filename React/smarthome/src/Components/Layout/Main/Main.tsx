import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainRoute from "../../Route/MainRoute/MainRoute";
import Footer from "../Footer/Footer";
import { Grid, Hidden } from "@mui/material";

const Main: React.FC = () => {
  return (
    <Grid container direction="column" style={{ paddingBottom: "70px" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12}>
        <Hidden lgDown>
          <Grid item lg={2} className="menu">
            <Menu />
          </Grid>
          <Grid item lg={10}>
            <MainRoute />
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs={12}>
            <MainRoute />
          </Grid>
        </Hidden>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Main;
