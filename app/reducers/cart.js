import { ADD_TO_CART } from '../actions/cart';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        action.item
      }
    default:
      return state;
  }
};

export default reducer;
