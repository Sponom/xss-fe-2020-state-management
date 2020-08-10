export const incrementAction = { type: 'INCREMENT' };

export const increment = () => incrementAction;

// добавить сброс счетчика

const setData = (data) => {
  return {
    type: 'SET_DATA',
    payload: data,
  };
};

export const fetcheExampleData = () => dispatch => {
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setData(data));
      });
  }, 1000);
};

const initialState = {
  counter: 0,
  data: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
