import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import "./AboutMe.css";

// Example card content data
const cardContents = [
  {
    title: "About This Project",
    description:
      "This project is a YouTube app clone designed to explore and showcase the capabilities of React, Redux, and Material UI. It allows users to search for videos, view video details, and manage a list of favorite videos.",
  },
  {
    title: "Technologies Used",
    description:
      "Throughout the development process, I've learned a lot about state management with Redux, routing with React Router, and the importance of component-based architecture.",
  },
  {
    title: "Learning Experience",
    description:
      "This project has been an invaluable learning experience, and I'm excited to share it with the community. Feel free to explore the app and reach out if you have any questions or feedback!",
  },
];

function AboutMe(): JSX.Element {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cardContents.map((content, index) => (
          <Grid item xs={12} sm={8} md={6} key={index}>
            <Card raised sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  {content.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {content.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AboutMe;
