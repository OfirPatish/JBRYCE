import { Typography, Box } from "@mui/material";

function Home(): JSX.Element {
  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to AutoTrack
      </Typography>
      <Typography variant="body1" gutterBottom>
        This website provides comprehensive information about various vehicle tracking technologies. You can view the
        details of each vehicle, including its current location, speed, and more.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vehicle tracking technologies are digital or virtual systems that provide real-time tracking and control over
        various vehicles. They operate on technology called Internet of Things (IoT), which is a network of physical
        devices connected and exchanging data.
      </Typography>
      <Typography variant="body1" gutterBottom>
        With AutoTrack, you can explore the fascinating world of vehicle tracking technologies, understand their
        performance, and make informed decisions. Whether you're a seasoned vehicle owner or a curious beginner, this
        website is a valuable resource for all your vehicle tracking needs.
      </Typography>
    </Box>
  );
}

export default Home;
