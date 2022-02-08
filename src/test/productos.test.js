// axios se puede reemplazar con supertest
import axios from 'axios';
// assert se puede reemplazar con chai
import assert from 'assert';

const API_URL = 'http://localhost:8080';
const API_PRODUCTS = `${API_URL}/api/productos`;
let productId = null;

describe('[suite products] api rest in /api/productos', () => {
  it('method GET should return status 200 and array with existing products', async () => {
    const response = await axios.get(API_PRODUCTS);

    assert.deepEqual(response.status, 200);
    assert.deepEqual(Array.isArray(response.data), true);
  });

  it('method POST should return status 200 and the product created', async () => {
    const response = await axios.post(API_PRODUCTS, {
      name: "pizza",
      price: "100"
    });

    productId = response.data.id;
    assert.deepEqual(response.status, 200);
    assert.deepEqual(Number.isInteger(response.data.id), true);
    assert.deepEqual(response.data.name, "pizza");
    assert.deepEqual(response.data.price, "100");
  });

  it('method PUT should return status 200 and the product updated', async () => {
    const response = await axios.put(`${API_PRODUCTS}/${productId}`, {
      id: productId,
      name: "pizza",
      price: "150"
    });

    assert.deepEqual(response.status, 200);
    assert.deepEqual(response.data.id, productId);
    assert.deepEqual(response.data.name, "pizza");
    assert.deepEqual(response.data.price, "150");
  });

  it('method DELETE should return status 200 and the product deleted', async () => {
    const response = await axios.delete(`${API_PRODUCTS}/${productId}`);

    assert.deepEqual(response.status, 200);
    assert.deepEqual(response.data.id, productId);
  });
});