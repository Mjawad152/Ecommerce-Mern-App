import axios from 'axios';


const baseURL = 'http://localhost:5000';

const api = axios.create({
  baseURL: baseURL,
});





export const signup = async (formData) => {
  try {
    const response = await api.post('/sign-up', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = async (logdata) => {
  try {
    const response = await api.post('/log-in', logdata);
    // console.log(logdata)
    // const logdataJSON = JSON.stringify(logdata, null, 2);
    // alert(logdataJSON)
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const userdata = async (proData) => {
  try {
    const response = await api.post('/user-data', proData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getData = async () => {
  try {
    const response = await api.get('/user-items');
    return response.data;
  } catch (error) {
    throw error;
  }
};




