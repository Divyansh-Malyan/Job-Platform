import axios from "axios";

const API_URL = "http://localhost:8080";

// Apply for a job
export const applyJob = async (
  job_id,
  student_id
) => {

  const response = await axios.post(
    `${API_URL}/applications`,
    {
      job_id,
      student_id,
    }
  );

  return response.data;
};

// Check if user already applied
export const checkApplied = async (
  job_id,
  student_id
) => {

  const response = await axios.get(
    `${API_URL}/applications/check/${job_id}/${student_id}`
  );

  return response.data;
};

export const updateApplicationStatus = async (
  applicationId,
  status
) => {

  const response = await axios.patch(
    `${API_URL}/applications/${applicationId}/status`,
    { status }
  );

  return response.data;

};