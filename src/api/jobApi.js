import axios from "axios";
import { API_URL } from "./config";

export const getJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

export const getJobById = async (id) => {
  const response = await axios.get(
    `${API_URL}/jobs/${id}`
  );

  return response.data;
};

export const createJob = async (jobData) => {
  const response = await axios.post(
    `${API_URL}/jobs`,
    jobData
  );

  return response.data;
};

export const getRecruiterJobs = async (
  recruiterId
) => {
  const response = await axios.get(
    `${API_URL}/jobs/recruiter/${recruiterId}`
  );

  return response.data;
};

export const closeJob = async (jobId) => {
  const response = await axios.patch(
    `${API_URL}/jobs/${jobId}/status`,
    {
      status: "Closed"
    }
  );

  return response.data;
};

export const deleteJob = async (jobId) => {
  const response = await axios.delete(
    `${API_URL}/jobs/${jobId}`
  );

  return response.data;
};

export const updateJob = async (
  jobId,
  jobData
) => {
  const response = await axios.put(
    `${API_URL}/jobs/${jobId}`,
    jobData
  );

  return response.data;
};

export const getApplicantsByJob = async (jobId) => {
  const response = await axios.get(
    `${API_URL}/jobs/job/${jobId}`
  );

  return response.data;
};

export const getRecruiterCompany = async (
  recruiterId
) => {
  const response = await axios.get(
    `${API_URL}/jobs/recruiter/company/${recruiterId}`
  );

  return response.data;
};