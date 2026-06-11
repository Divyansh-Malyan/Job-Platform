import axios from "axios";

const API_URL = "http://localhost:8080";

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