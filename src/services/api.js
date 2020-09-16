import axios from "axios";

// this file is responsible to make api call's

// baseURL API
const api = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/",
});

export default api;
