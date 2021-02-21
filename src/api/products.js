import { apiRequest } from './utils';

function getProductsList() {
  return apiRequest('GET', '/products');
}

function getProduct(id) {
  return apiRequest('GET', 'products/' + id);

}

export default {
  getList: getProductsList,
  getProduct: getProduct
};
