const persistCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  cart: getCartFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((cartItem) =>
          cartItem.cartId === existingItem.cartId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      persistCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem.cartId !== action.payload
      );
      persistCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case 'INCREASE_QUANTITY': {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.cartId === action.payload
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      persistCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case 'DECREASE_QUANTITY': {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.cartId === action.payload && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      persistCartToLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };
    }

    case 'CLEAR_CART': {
      persistCartToLocalStorage([]);
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
};

export default cartReducer;
