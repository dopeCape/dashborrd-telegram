import axios from "axios";

export const instance = axios.create({
  baseURL: "https://telegram-bot-backend.onrender.com",
});
