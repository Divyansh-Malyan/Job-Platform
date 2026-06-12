import axios from "axios";
import { API_URL } from "./config";

const SAVED_JOB_API =
    `${API_URL}/saved-jobs`;

export const saveJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.post(
            SAVED_JOB_API,
            {
                student_id: studentId,
                job_id: jobId
            }
        );

    return response.data;
};

export const removeSavedJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.delete(
            `${SAVED_JOB_API}/${studentId}/${jobId}`
        );

    return response.data;
};

export const checkSavedJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.get(
            `${SAVED_JOB_API}/check/${studentId}/${jobId}`
        );

    return response.data;
};

export const getSavedJobs = async (
    studentId
) => {

    const response =
        await axios.get(
            `${SAVED_JOB_API}/${studentId}`
        );

    return response.data;
};