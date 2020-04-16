const rootReducer = (state = null, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return 'some action dispatched';
    default:
      return state;
  }
};

export default rootReducer;
