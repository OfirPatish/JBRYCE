import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

const CustomFooterBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: theme.palette.getContrastText(theme.palette.primary.main),
  padding: theme.spacing(2),
  textAlign: "center",
}));

function Footer(): JSX.Element {
  const theme = useTheme();

  return (
    <CustomFooterBox>
      <Typography variant="body2" color="inherit">
        All rights reserved &copy; {new Date().getFullYear()}
      </Typography>
    </CustomFooterBox>
  );
}

export default Footer;
