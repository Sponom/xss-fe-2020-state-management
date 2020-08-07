export const incrementAction = { type: "INCREMENT" };

export const decrementAction = { type: "DECREMENT" };

export const init = initialCounter => {
  return { counter: initialCounter };
};

export const initialState = {
  counter: 0
};

export default (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
