import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
});

api.interceptors.request.use((config) => {
  config.headers.set("X-Tutorial", "axios-lesson");
  console.log("[request]", config.method?.toUpperCase(), config.url);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("[response]", response.status, response.config.url);
    return response;
  },
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      console.error("[error]", error.message, error.response?.status);
    }
    return Promise.reject(error);
  },
);

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
