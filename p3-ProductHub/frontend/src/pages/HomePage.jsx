import { fetchAllProducts } from '../api/api';
import React, { useEffect, useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className='p-8 flex flex-col items-center gap-8 bg-white min-h-screen'>
      <h1 className='text-2xl font-bold text-gray-800'>All Products</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl'>
        {products.length > 0 ? (
          products.map((p, idx) => (
            <div
              key={idx}
              className='bg-amber-100 rounded-xl shadow-md p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-lg'
            >
              <img
                src={p.image}
                alt={p.name}
                className='w-40 h-40 object-cover rounded-md mb-4'
              />
              <h2 className='text-lg font-semibold text-center'>{p.name}</h2>
              <p className='text-gray-700'>₹{p.price}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500 col-span-full'>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
