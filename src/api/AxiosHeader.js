import axios from 'axios';

export const SetAuthHeader = (token, id) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        axios.defaults.headers.common['AccountId'] = id
    } else {
      axios.defaults.headers.common['Authorization'] = token ? 'Bearer ' + token : ''
    }
  }