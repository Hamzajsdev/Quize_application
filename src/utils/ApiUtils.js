import axios from "axios";

const baseURL = process.env.BASE_URL;
const LoginApis = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  withCredentials: true
});

export default LoginApis;