import axios from "axios";
import CarDetails from "../CarDetails/CarDetails";
import { useParams, useNavigate } from "react-router-dom";
import { SyntheticEvent, useEffect, useState } from "react";
import { Car } from "../../Model/Car";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import "./Search.css";

function Search(): JSX.Element {
  const navigate = useNavigate();
  const { vehicleType } = useParams<{ vehicleType?: string }>();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    }
  }, [navigate]);

  const [currentVehicleType, setCurrentVehicleType] = useState(vehicleType || "car");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Car[]>([]);

  const CAR_API_URL =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
  const BIKE_API_URL =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
  const TRUCK_API_URL =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";
  const OFFROAD_API_URL =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

  useEffect(() => {
    setCurrentVehicleType(vehicleType || "car");
    setSearchResults([]);
  }, [vehicleType]);

  const fetchSearchResults = () => {
    let apiUrl = "";
    switch (currentVehicleType) {
      case "car":
        apiUrl = CAR_API_URL;
        break;
      case "bike":
        apiUrl = BIKE_API_URL;
        break;
      case "truck":
        apiUrl = TRUCK_API_URL;
        break;
      case "offroad":
        apiUrl = OFFROAD_API_URL;
        break;
    }

    axios.get(apiUrl + searchQuery).then((response) => {
      const results: Car[] = [];
      const responseRecords = response.data.result.records;
      for (let index = 0; index < responseRecords.length; index++) {
        results.push(
          new Car(
            responseRecords[index].baalut,
            responseRecords[index].tozeret_nm,
            responseRecords[index].kinuy_mishari,
            responseRecords[index].sug_delek_nm,
            responseRecords[index].mispar_rechev
          )
        );
      }
      setSearchResults(results);
    });
  };

  const handleInputChange = (event: SyntheticEvent) => {
    const query = (event.target as HTMLInputElement).value;
    setSearchQuery(query);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() === "") {
      return;
    }
    fetchSearchResults();
  };

  return (
    <div className="Search">
      <h2>{currentVehicleType.charAt(0).toUpperCase() + currentVehicleType.slice(1)} Locator</h2>
      <input type="text" onChange={handleInputChange} />
      <input type="button" value={"Search"} onClick={handleSearchClick} />
      <div className="results">
        {searchResults.map((car, index) => (
          <CarDetails key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Search;
