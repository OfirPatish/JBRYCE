import React, { useState } from "react";
import axios from "axios";
import "./Cars.css";

// Define an interface for the car data
interface CarData {
  result: {
    records: {
      mispar_rechev: number;
      tozeret_nm: string;
      kinuy_mishari: string;
      sug_delek_nm: string;
      baalut: string;
    }[];
  };
}

function Cars(): JSX.Element {
  const [limit, setLimit] = useState(5);
  const [carData, setCarData] = useState<CarData | null>(null);

  const handleSearch = () => {
    axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=${limit}`
      )
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        // Handle the error here
        //console.error("Error:", error);
      });
  };

  return (
    <div className="Cars">
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
        {[5, 10, 15, 20].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {carData &&
        carData.result.records.map((record, index) => (
          <div key={index} className="car-data">
            <h2>Car Number: {record.mispar_rechev}</h2>
            <p>Owner: {record.baalut}</p>
            <p>Manufacturer: {record.tozeret_nm}</p>
            <p>Model: {record.kinuy_mishari}</p>
            <p>Fuel Type: {record.sug_delek_nm}</p>
          </div>
        ))}
    </div>
  );
}

export default Cars;
