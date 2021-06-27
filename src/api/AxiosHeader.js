import axios from 'axios';

export const SetAuthHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : ''
  }