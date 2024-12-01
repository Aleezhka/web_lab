const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const item = action.payload;
        const existingItem = state.cart.find(
          cartItem => cartItem.id === item.id && cartItem.size === item.size
        );
  
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(cartItem =>
              cartItem.cartId === existingItem.cartId
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
        }
      }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(cartItem => cartItem.cartId !== action.payload),
        };
  
      case 'INCREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.cartId === action.payload
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
  
      case 'DECREASE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.cartId === action.payload && cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  