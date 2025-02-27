import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.API_BASE_URL,
  timeout: 60000,
  retry: 0,
});
