import axios from "axios";

const API_URL = "http://localhost:8080";

export const getJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  // console.log("API Response:", response.data); // Debugging log
  // console.log("API Response:", response); // Debugging log
  return response.data;
};