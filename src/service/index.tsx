import axios from 'axios';

export default axios.create({
  baseURL: `https://6033d65e843b150017931b3b.mockapi.io/api`,
});
// const token = localStorage.getItem('authorization');
// api.defaults.headers.Authorization = token || null;
