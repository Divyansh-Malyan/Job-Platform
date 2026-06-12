import axios from "axios";
import { API_URL } from "./config";

export const getStudentProfile = async (userId) => {

    const response = await axios.get(
        `${API_URL}/students/profile/${userId}`
    );

    return response.data;
};

export const getStudentById = async (studentId) => {

    const response = await axios.get(
        `${API_URL}/students/${studentId}`
    );

    return response.data;
};

export const updateStudentProfile = async (
    userId,
    profileData
  ) => {
  
    const response = await axios.put(
      `${API_URL}/students/profile/${userId}`,
      profileData
    );
  
    return response.data;
  };