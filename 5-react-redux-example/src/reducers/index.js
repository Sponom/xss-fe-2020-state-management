export const incrementAction = { type: "INCREMENT" };

export const increment = () => incrementAction;

// добавить сброс счетчика

const initialState = {
  counter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
