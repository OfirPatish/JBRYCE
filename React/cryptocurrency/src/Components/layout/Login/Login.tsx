import { Button, TextField, Checkbox, FormControlLabel, Container, Box, Grid, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import "./Login.css";

function Login(): JSX.Element {
  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Login</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Box mb={2}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </Box>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={5}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button type="reset" variant="contained" fullWidth>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
