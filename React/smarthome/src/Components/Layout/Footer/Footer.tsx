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
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <p>© 2024 IntelliHome</p>
    </Box>
  );
};

export default Footer;
