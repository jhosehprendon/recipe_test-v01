// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        action.recipe
      ];
    case 'REMOVE_RECIPE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.updates
          };
        } else {
          return recipe;
        };
      });
    default:
      return state;
  }
};
