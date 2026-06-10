const API_URL = "http://localhost:8080";

export const getRecruiterDashboard = async (recruiterId) => {
  const response = await fetch(
    `${API_URL}/dashboard/${recruiterId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};