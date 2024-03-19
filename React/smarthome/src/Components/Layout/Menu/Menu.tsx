import { Typography, Box, Button, Stack, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        bgcolor: "grey.200",
        width: "240px",
        height: "100vh",
        position: "fixed",
        mt: 8,
      }}
    >
      <Typography variant="h6" component="div" sx={{ my: 2, fontWeight: "bold", color: "primary.main", pb: 1 }}>
        Menu
      </Typography>
      <Divider />
      <Stack spacing={2} width="100%" sx={{ mt: 2 }}>
        <Typography variant="body1" component="div">
          <NavLink to="/fetch-data" style={{ textDecoration: "none", color: "inherit" }}>
            Fetch Data from Server
          </NavLink>
        </Typography>
        <Typography variant="body1" component="div">
          <NavLink to="/display-components" style={{ textDecoration: "none", color: "inherit" }}>
            Display Components
          </NavLink>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            /* Save data logic here */
          }}
        >
          Save Data
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            /* Send to controller logic here */
          }}
        >
          Send to Controller
        </Button>
      </Stack>
    </Box>
  );
}

export default Menu;
