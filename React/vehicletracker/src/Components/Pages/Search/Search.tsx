import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItem from "../SingleItem/SingleItem";
import { Vehicle } from "../../Model/Vehicle";
import { Box, TextField, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
      }}
    >
      <Typography variant="h4" component="div">
        {currentVehicleType.toUpperCase()} Component
      </Typography>
      <Typography variant="body1">Welcome to the search page!</Typography>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={getData}>
        Search
      </Button>
      {vehicles.map((vehicle) => (
        <SingleItem key={vehicle._id} vehicle={vehicle} />
      ))}
    </Box>
  );
}

export default Search;
