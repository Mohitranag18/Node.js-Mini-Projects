import axios from 'axios';

const SERVER_URL="http://localhost:5000/api/"

export const addProductToBackend = async (product) => {
  try {
    const response = await axios.post(`${SERVER_URL}products`, product);
    console.log('Product added successfully:', response.data);
  } catch (error) {
    console.error('Error adding product:', error.response ? error.response.data : error.message);
  }
};

export const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}products`);
      console.log('Fetched products:', response.data);
      return response.data.data; // You can return this to use in state
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      return [];
    }
  };