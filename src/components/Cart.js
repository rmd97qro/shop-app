import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart, removeToCart } = useContext(CartContext);
  return (
    <div className="mt-6">
      <div className=" text-center">
        <h1 className="font-sans font-bold text-2xl">Cart</h1>
      </div>
      <table className="min-w-max w-full table-auto mt-3">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Code</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Count</th>
            <th className="py-3 px-6 text-left">Total Price</th>
            <th className="py-3 px-6 text-left">action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {cart.map((product, index) => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100"
              key={`${product.code}-${index}`}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {product.code}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {product.name}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                x{product.count}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {product.totalPrice}
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button onClick={() => removeToCart(product)}>
                    <div className="w-4 mr-2 transform hover:text-gray-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinejoin="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {cart.length === 0 && (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-center whitespace-nowrap" colSpan={5}>Cart empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
