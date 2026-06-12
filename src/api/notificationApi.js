import axios from "axios";
import { API_URL } from "./config";

export const getNotifications =
  async (userId) => {

    const response =
      await axios.get(
        `${API_URL}/notifications/${userId}`
      );

    return response.data;
  };

export const markAllRead =
  async (userId) => {

    const response =
      await axios.put(
        `${API_URL}/notifications/read-all/${userId}`
      );

    return response.data;
  };