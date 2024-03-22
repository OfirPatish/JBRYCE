import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#282828",
        color: "white",
        padding: 1,
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <p>© 2024 AutoTrack</p>
    </Box>
  );
};

export default Footer;
