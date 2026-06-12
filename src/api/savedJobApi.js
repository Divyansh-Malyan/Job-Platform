import axios from "axios";

const API =
    "http://localhost:8080/saved-jobs";

export const saveJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.post(API, {
            student_id: studentId,
            job_id: jobId
        });

    return response.data;
};

export const removeSavedJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.delete(
            `${API}/${studentId}/${jobId}`
        );

    return response.data;
};

export const checkSavedJob = async (
    studentId,
    jobId
) => {

    const response =
        await axios.get(
            `${API}/check/${studentId}/${jobId}`
        );

    return response.data;
};

export const getSavedJobs = async (
    studentId
) => {

    const response =
        await axios.get(
            `${API}/${studentId}`
        );

    return response.data;
};