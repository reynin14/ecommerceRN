import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  cart = []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action],
      }
    default:
      return state;
  }
};

export default reducer;
