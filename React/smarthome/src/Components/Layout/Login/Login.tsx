import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

type LoginFormInputs = {
  username: string;
  password: string;
  remember: boolean;
};

function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => console.log(data);

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
        <Paper elevation={3} sx={{ padding: 3, marginTop: 2, width: "100%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography component="h1" variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: "bold" }}>
              Login
            </Typography>
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                    style: { borderRadius: 25 },
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    style: { borderRadius: 25 },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <FormControlLabel control={<Checkbox {...register("remember")} />} label="Remember me" />
                  <Typography variant="body2" color="textSecondary">
                    Forgot Password?
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ borderRadius: 25 }}>
                    Login
                  </Button>
                  <Typography variant="body2" color="textSecondary">
                    Don't have an account?{" "}
                    <Typography color="primary" component="span">
                      Register
                    </Typography>
                  </Typography>
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
