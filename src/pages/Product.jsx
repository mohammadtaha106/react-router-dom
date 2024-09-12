import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { CartContext } from '../context/CartContext';

function Product() {
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState('');

  const globalstate =useContext(CartContext)
  const dispatch = globalstate.dispatch
  console.log(globalstate);
  



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const categories = [...new Set(post.map((item) => item.category))];

  const filteredArray = category
    ? post.filter((data) => data.category === category)
    : post;

  return (
    <div className="bg-white min-h-screen text-purple-900">
      <p className='text-5xl font-bold text-purple-900 mb-6 playfair_font text-center bg-purple-100 p-4 mt-10' 
         style={{ fontFamily: 'cursive' }}>
        Product Section
      </p>

      <div className="p-4 max-w-2xl mx-auto mb-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'cursive' }}>
            Search by Category
          </h2>
          <div className="relative inline-block w-full">
            <select
              className="appearance-none w-full p-2 border-1  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out text-black font-serif" 
              onChange={(e) => setCategory(e.target.value)} value={category}
            >
              <option value="">All Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="fill-current h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3h-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-full mx-auto">
      {filteredArray.map((data) => {
  data.quantity = 1; 

  return (
    <div key={data.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h1 className="text-lg font-semibold mb-2 text-gray-900">{data.title}</h1>
      <img className="w-full h-40 object-cover rounded-lg mb-4" src={data.image} alt={data.title} />
      <p className="text-indigo-600 text-sm font-semibold mb-2">{data.category}</p>
      <span className="text-green-600 font-bold text-lg mb-4">{data.price}$</span>
      <button
        className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
        onClick={() => dispatch({ type: "ADD", payload: data })}
      >
        Add to Cart
      </button>
    </div>
  );
})}

      </div>
    </div>
  );
}

export default Product;
