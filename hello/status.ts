import { api } from "encore.dev/api";

const startTime = Date.now();

export const status = api(
  { expose: true, method: "GET", path: "/status" },
  async () => {
    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
    return {
      status: "ok",
      uptime: `${uptimeSeconds}s`,
    };
  }
);
