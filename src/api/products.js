import { apiRequest } from './utils';

function getProductsList() {
  return apiRequest('GET', '/products');
}

export default {
  getList: getProductsList,
};
