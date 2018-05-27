import { ADD_TO_CART } from '../actions/cart';

const reducer = () => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default reducer;
