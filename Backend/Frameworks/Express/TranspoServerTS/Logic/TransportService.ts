import axios from "axios";

const CAR_API_URL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
const BIKE_API_URL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
const TRUCK_API_URL =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=cd3acc5c-03c3-4c89-9c54-d40f93c0d790&q=";

const getCarInfo = async (id: string) => {
  const carData = (await axios.get(CAR_API_URL + id)).data.result.records[0];
  return carData;
};

const getBikeInfo = async (id: string) => {
  const bikeData = (await axios.get(BIKE_API_URL + id)).data.result.records[0];
  return bikeData;
};

const getTruckInfo = async (id: string) => {
  const truckData = (await axios.get(TRUCK_API_URL + id)).data.result.records[0];
  return truckData;
};

export { getCarInfo, getBikeInfo, getTruckInfo };
