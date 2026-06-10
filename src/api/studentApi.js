const API_URL = "http://localhost:8080";

export const getStudentProfile = async (userId) => {
  const response = await fetch(
    `${API_URL}/students/${userId}`
  );

  const data = await response.json();

  return data;
};