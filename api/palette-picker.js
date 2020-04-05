import axios from 'axios';
import logger from '../utils/logger';
import { toHex } from '../utils/colors';

export default async function(req, res, next) {
  try {
    const {
      data: { result },
    } = await axios.post('http://colormind.io/api/', {
      model: 'default',
    });
    const colors = result.map(toHex);
    return res.end(JSON.stringify({ colors }));
  } catch (err) {
    logger.error(err);
    return res.end(JSON.stringify({ error: err.toString() }));
  }
}
