import { Button, TextField, Checkbox, FormControlLabel, Container, Box, Grid, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";

type FormInputs = {
  username: string;
  password: string;
  remember: boolean;
};

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Paper elevation={3} sx={{ padding: 3, marginTop: 2, width: "100%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  {...register("username", {
                    required: "Username is required",
                    minLength: { value: 3, message: "Username must be at least 3 characters long" },
                  })}
                  error={Boolean(errors.username)}
                  helperText={errors.username?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <FormControlLabel control={<Checkbox {...register("remember")} />} label="Remember me" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" gap={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                  <Button type="button" variant="contained" color="success">
                    Sign Up
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
