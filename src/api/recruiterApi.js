import axios from "axios";

export const getRecruiterProfile =
async (id) => {

  const response =
    await axios.get(
      `http://localhost:8080/recruiters/${id}`
    );

  return response.data;
};

export const updateRecruiter =
async (id, data) => {

  const response =
    await axios.put(
      `http://localhost:8080/recruiters/${id}`,
      data
    );

  return response.data;
};