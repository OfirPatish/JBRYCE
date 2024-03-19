import { Box, List, ListItem, ListItemText, Button, ListItemIcon } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Menu(): JSX.Element {
  return (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        bgcolor: "grey.200",
        position: "fixed",
        top: "50px",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          mt: 8,
        }}
      >
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            startIcon={<CloudDownloadIcon />}
            onClick={() => {
              /* Fetch data logic here */
            }}
          >
            <ListItemText primary="Fetch Data from Server" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            startIcon={<VisibilityIcon />}
            onClick={() => {
              /* Display components logic here */
            }}
          >
            <ListItemText primary="Display Components" />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={() => {
              /* Save data logic here */
            }}
          >
            Save Data
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SendIcon />}
            onClick={() => {
              /* Send to controller logic here */
            }}
          >
            Send to Controller
          </Button>
        </ListItem>
      </List>
    </Box>
  );
}

export default Menu;
