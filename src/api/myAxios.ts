import axios, { AxiosInstance } from "axios";

const apiUrl: string = `https://bikeindex.org:443/api/v3`;

export const myAxios: AxiosInstance = axios.create({
  baseURL: apiUrl,
});

export default myAxios;
