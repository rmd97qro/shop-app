import React, { useContext } from "react";
import { listProducts } from "../api/products";
import { CartContext } from "../contexts/CartContext";

function Products() {
  const { addToCart, removeToCart } = useContext(CartContext);

  return (
    <div className="">
      <div className=" text-center">
        <h1 className="font-sans font-bold text-2xl">Products</h1>
      </div>
      <div className=" flex items-center justify-center font-sans overflow-hidden">
        {listProducts.map((product, index) => (
          <div
            key={`${product.code}-${index}`}
            className="mb-8 p-6 rounded-xl shadow-xl transition-all transform duration-500 mr-4"
          >
            <img
              className="w-64 h-64 object-cover rounded-t-md"
              src={product.image}
              alt=""
            />
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
              <p className="text-sm mt-2 text-gray-700">{product.code}</p>
              <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                <button className="block text-xl font-semibold text-gray-700 cursor-auto">
                  ${product.price}
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
