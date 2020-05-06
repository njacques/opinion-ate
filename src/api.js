import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/dDamqgr4UT151WDLSdVxC8ivYZSY5k1u',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
