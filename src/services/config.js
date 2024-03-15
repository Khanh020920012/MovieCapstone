import axios from "axios";

export const http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDEiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NDA3MDA4MDAwMDAiLCJuYmYiOjE3MTE2NDUyMDAsImV4cCI6MTc0MDg0ODQwMH0.0_tmvn4b0xTEM_cZrDYETwckfXaE7DVv7NgiCAPSfDI",
  },
  timeout: 30000,
  // baseURL: "https://www.youtube.com",
});
