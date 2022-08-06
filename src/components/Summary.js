import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

function Summary() {
  const { cart } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubtotal(cart.reduce((acc, product) => acc + product.totalPrice, 0));

    setDiscount(
      cart
        .map((product) => calculateDiscount(product))
        .reduce((prev, curr) => prev + curr, 0)
    );
  }, [cart]);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal, discount]);

  const calculateDiscount = (product) => {
    if (product.code === "PEN" && product.count >= 2) {
      return product.price;
    }

    if (product.code === "TSHIRT" && product.count >= 3) {
      return product.totalPrice * 0.25;
    }

    return 0;
  };

  return (
    <div>
      <h1>Summary</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Subtotal:</strong>
            </td>
            <td>{subtotal}</td>
          </tr>
          <tr>
            <td>
              <strong>Discount:</strong>
            </td>
            <td>{discount}</td>
          </tr>
          <tr>
            <td>
              <strong>Total:</strong>
            </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
