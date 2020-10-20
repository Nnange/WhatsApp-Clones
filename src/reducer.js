export const initialState = {
  user: null,
  seed: "",
};

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_SEED: "ADD_SEED",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.ADD_SEED:
      return {
        ...state,
        seed: action.seed,
      };

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: action.user,
      }  

    default:
      return state;
  }
};

export default reducer;
