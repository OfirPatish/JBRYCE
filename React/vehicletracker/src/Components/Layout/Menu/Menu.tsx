import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "16.666%" },
        maxWidth: "300px",
        height: "calc(100vh - 64px)",
        bgcolor: "#282828",
        position: "fixed",
        top: "64px",
      }}
    >
      <List
        sx={{
          width: "100%",
          color: "white",
        }}
      >
        <ListItemButton component={NavLink} to="/search/car">
          <ListItemText primary="Vehicle Tracking" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/search/bike">
          <ListItemText primary="Bike Tracking" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/search/truck">
          <ListItemText primary="Truck Tracking" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/search/off-road">
          <ListItemText primary="Off-Road Vehicle Tracking" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Menu;
