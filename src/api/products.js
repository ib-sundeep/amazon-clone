import { apiRequest } from './utils';

function getProductsList() {
  return apiRequest('GET', '/products');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: getProductsList,
};
