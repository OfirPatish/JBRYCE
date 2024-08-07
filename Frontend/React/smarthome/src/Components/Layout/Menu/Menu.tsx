import { Box, List, ListItem, ListItemText, Collapse, ListItemButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

function Menu(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#282828",
        position: "fixed",
        top: "50px",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          mt: 8,
          color: "white",
        }}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Data Operations" />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                /* Fetch data logic here */
              }}
            >
              <ListItemText primary="Fetch Data from Server" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                /* Display components logic here */
              }}
            >
              <ListItemText primary="Display Components" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            /* Save data logic here */
          }}
        >
          <ListItemText primary="Save Data" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            /* Send to controller logic here */
          }}
        >
          <ListItemText primary="Send to Controller" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Menu;
