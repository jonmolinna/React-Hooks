import types from "./types";

const initialProductState = {
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
  cart: [
    {
      id: 1,
      title: "Product #1",
      quantity: 1,
    }, // normal es que manejes solo id y quantity, los otros datos solo sacas con un search
  ],
  activeProduct: { id: 2, title: "Product #2" }, // solo debe ir id
};

const productReducer = (state, action) => {
  switch (action.type) {
    case types.PRODUCT_SHOW: {
      // si pasarias solo id
      // activeProduct: state.products.find((product) => product.id === action.payload);
      return {
        ...state,
        activeProduct: action.payload,
      };
    }
    case types.PRODUCT_ADD_TO_CART: {
      const newProduct = action.payload;
      const existProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );

      return existProduct
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
    }
    case types.PRODUCT_REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case types.PRODUCT_REMOVE_ONE_FROM_CART: {
      const productDelete = state.cart.find(
        (product) => product.id === action.payload
      );

      return productDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
    }
    default:
      return state;
  }
};

export { initialProductState };
export default productReducer;

// Reducer
// 1. Retornara el mismo estado, si se dispara la misma accion, con el mismo payload.
// 2. Los parametros de entrada (state, action) no deben ser mutados (Alterados).
//    debes utilizar funciones que no modifiquen el valor original, como "push" sino
//    que retornen uno nuevo, como "filter", "find", "map", "reduce"
