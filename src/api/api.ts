import Axios from "axios";

const api = Axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: { "content-type": "application/json", Accept: "application/json" },
});

export default api;
