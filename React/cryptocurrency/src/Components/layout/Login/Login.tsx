import { Button, TextField, Checkbox, FormControlLabel, Container, Box, Grid, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import { useState } from "react";
import "./Login.css";

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Grid item xs={3}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button type="button" variant="contained" fullWidth onClick={handleReset}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button type="button" variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
