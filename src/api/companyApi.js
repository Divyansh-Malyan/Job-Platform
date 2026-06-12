import axios from "axios";

export const updateCompany =
async (
  companyId,
  data
) => {

  const response =
    await axios.put(
      `http://localhost:8080/companies/${companyId}`,
      data
    );

  return response.data;
};