import axios from 'axios';
const httpRequest = axios.create({
   //baseURL: 'https://api-zingmp3-vercel.vercel.app/api/',
   baseURL : 'https://tiktok.fullstack.edu.vn/api/'
});

export const get = async (path, options = {}) => {
   const response = await httpRequest.get(path, options);
   return response.data;
};
export default httpRequest;
