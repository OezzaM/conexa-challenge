import axios from "axios";
import { BASE_URL } from "../common/constants";

const client = axios.create({ baseURL: BASE_URL });
client.interceptors.request.use(async (config) => {
  return config;
});

export const axiosClient = client;
