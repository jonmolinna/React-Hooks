import React, { useReducer } from "react";
import productReducer, {
  initialProductState,
} from "../../reducers/productReducer";
import types from "../../reducers/types";

const ProductApp = () => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);
  const { products, cart, activeProduct } = state;

  return (
    <div>
      <h3>Product App</h3>
      <h4>Products</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            {/* en payload solo se debe pasar el id del product y en reducer hacer un find */}
            <button
              onClick={() =>
                dispatch({ type: types.PRODUCT_SHOW, payload: product })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({ type: types.PRODUCT_ADD_TO_CART, payload: product })
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h4>Cart</h4>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: types.PRODUCT_REMOVE_ONE_FROM_CART,
                  payload: product.id,
                })
              }
            >
              Remove one
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.PRODUCT_REMOVE_FROM_CART,
                  payload: product.id,
                })
              }
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>

      <h4>Preview</h4>
      {activeProduct.title}
    </div>
  );
};

export default ProductApp;
