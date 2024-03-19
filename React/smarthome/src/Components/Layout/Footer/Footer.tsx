import * as React from "react";
import { styled } from "@mui/system";

const StyledFooter = styled("footer")({
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
});

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>© 2024 IntelliHome</p>
    </StyledFooter>
  );
};

export default Footer;
