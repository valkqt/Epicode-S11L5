const initialState = {
  selected: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED":
      return {
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
