import axios from "axios";
// import 'dotenv/config';


const LoginApis = axios.create({
  baseURL:process.env.BASE_URL,
  responseType:'json',
  withCredentials:true
})
export default LoginApis