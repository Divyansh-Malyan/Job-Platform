import axios from "axios";
import { API_URL } from "./config";

export const updateCompany =
async (
  companyId,
  data
) => {

  const response =
    await axios.put(
      `${API_URL}/companies/${companyId}`,
      data
    );

  return response.data;
};