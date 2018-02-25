import axios from 'axios';
import { config } from '../../config.js';

export const get = (url = '') =>
  axios.get(`${config.apiUrl}/${url}`);
