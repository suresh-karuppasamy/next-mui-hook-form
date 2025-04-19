import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_API_URL;

export const fetchUsers = async () => {
  // try {
  //   console.log("Fetching users...");
  //   const response = await axios.get('/objects');
  //   console.log("Data fetched:", response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching users:', error);
  //   throw error;
  // }
};