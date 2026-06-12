import axios from "axios";
import { API_URL } from "./config";

const RECRUITER_URL = `${API_URL}/recruiters`;

export const getRecruiterProfile =
async (id) => {

  const response =
    await axios.get(`${RECRUITER_URL}/${id}`);

  return response.data;
};

export const updateRecruiter =
async (id, data) => {

  const response =
    await axios.put(
      `${RECRUITER_URL}/${id}`,
      data
    );

  return response.data;
};