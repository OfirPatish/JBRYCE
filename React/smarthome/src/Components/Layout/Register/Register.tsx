import {
  Button,
  TextField,
  Container,
  Box,
  Grid,
  Typography,
  Paper,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";

type RegisterFormInputs = {
  userName: string;
  userPassword: string;
  address: string;
  age: number;
  city: string;
  country: string;
  userLocation: string;
};

function Register(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const handleRegisterFormSubmit = (data: RegisterFormInputs) => console.log(data);

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
          <form onSubmit={handleSubmit(handleRegisterFormSubmit)}>
            <Typography component="h1" variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: "bold" }}>
              Register
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  {...register("userName", {
                    required: "Username is required",
                    minLength: { value: 8, message: "Username must be at least 8 characters" },
                    maxLength: { value: 16, message: "Username must be at most 16 characters" },
                  })}
                  error={Boolean(errors.userName)}
                  helperText={errors.userName?.message}
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
                  {...register("userPassword", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                    maxLength: { value: 16, message: "Password must be at most 16 characters" },
                  })}
                  error={Boolean(errors.userPassword)}
                  helperText={errors.userPassword?.message}
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
              {/* Add more fields similarly */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ borderRadius: 25 }}>
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register;
