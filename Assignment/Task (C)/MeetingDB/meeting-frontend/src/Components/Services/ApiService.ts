import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getDevelopmentGroups = async () => {
  const response = await axios.get(`${API_URL}/development-groups`);
  return response.data;
};

export const getMeetingsByGroupCode = async (groupCode: number) => {
  const response = await axios.get(`${API_URL}/meetings/${groupCode}`);
  return response.data;
};

export const addNewMeeting = async (meeting: any) => {
  const response = await axios.post(`${API_URL}/meetings`, meeting);
  return response.data;
};
