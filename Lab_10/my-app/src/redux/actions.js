export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (cartId) => ({
    type: 'REMOVE_FROM_CART',
    payload: cartId,
  });
  
  export const increaseQuantity = (cartId) => ({
    type: 'INCREASE_QUANTITY',
    payload: cartId,
  });
  
  export const decreaseQuantity = (cartId) => ({
    type: 'DECREASE_QUANTITY',
    payload: cartId,
  });
  