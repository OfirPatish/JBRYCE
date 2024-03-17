import { Button, TextField, Checkbox, FormControlLabel, Container, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";

interface FormInputs {
  username: string;
  password: string;
  remember: boolean;
}

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
          backgroundColor: "#fafafa",
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <h1>Login</h1>
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
              <Box mb={2}>
                <FormControlLabel control={<Checkbox {...register("remember")} />} label="Remember me" />
              </Box>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={4}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button type="button" variant="contained" color="success" fullWidth>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
