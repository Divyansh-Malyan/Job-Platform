// api/notificationApi.js

import axios from "axios";

const API =
    "http://localhost:8080/notifications";

export const getNotifications =
    async (userId) => {

        const response =
            await axios.get(
                `${API}/${userId}`
            );

        return response.data;
    };

export const markAllRead =
    async (userId) => {

        const response =
            await axios.put(
                `${API}/read-all/${userId}`
            );

        return response.data;
    };