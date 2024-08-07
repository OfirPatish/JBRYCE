import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CustomAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
});

function Header(): JSX.Element {
  const totalVideos = useSelector((state: RootState) => state.youtube.videos.length);

  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          YouTube App
        </Typography>
        <Typography variant="subtitle1">Total videos in the system: {totalVideos}</Typography>
      </Toolbar>
    </CustomAppBar>
  );
}

export default Header;
