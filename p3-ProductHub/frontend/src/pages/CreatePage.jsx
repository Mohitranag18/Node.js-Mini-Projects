import { addProductToBackend } from '../api/api.js';
import React, { useState } from 'react';

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill all fields');
      return;
    }
    addProductToBackend(newProduct);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Product</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
            <input
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              type="text"
              name="name"
              value={newProduct.name}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-1 text-gray-700">Price</label>
            <input
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              type="text"
              name="price"
              value={newProduct.price}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-1 text-gray-700">Image Link</label>
            <input
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              type="text"
              name="image"
              value={newProduct.image}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter image URL"
            />
          </div>

          <button
            onClick={handleAddProduct}
            className="mt-4 bg-blue-400 hover:bg-blue-500 transition-colors py-2 rounded-md text-white font-semibold"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
