import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItem from "../SingleItem/SingleItem";
import { Vehicle } from "../../Model/Vehicle";
import { Box, TextField, Button, Typography, Stack, Container } from "@mui/material";

function Search(): JSX.Element {
  const URL_CAR =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
  const URL_BIKE = "";
  const URL_TRUCK = "";
  const URL_OFFROAD = "";

  const [currentVehicleType, setCurrentVehicleType] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const Params = useParams();
  const vehicleTypeFromURL = Params.VehicleType?.toLowerCase() || "car";

  useEffect(() => {
    setCurrentVehicleType(vehicleTypeFromURL);
  }, [vehicleTypeFromURL]);

  const getData = async () => {
    if (!inputValue.trim()) {
      return;
    }

    switch (vehicleTypeFromURL) {
      case "car":
        try {
          const response = await axios.get(`${URL_CAR}${inputValue}`);
          setVehicles(response.data.result.records);
        } catch (error) {
          console.error(error);
        }
        break;
      case "bike":
        // similar code for bike
        break;
      case "truck":
        // similar code for truck
        break;
      case "off-road":
        // similar code for off-road
        break;
      default:
        return "No Data Found";
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          {currentVehicleType.toUpperCase()} Component
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the search page!
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{ width: "100%", marginBottom: "10px" }}
        />
        <Button variant="contained" onClick={getData} sx={{ marginBottom: "10px" }}>
          Search
        </Button>
        <Stack spacing={2} width="100%">
          {vehicles.map((vehicle) => (
            <SingleItem key={vehicle._id} vehicle={vehicle} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default Search;
