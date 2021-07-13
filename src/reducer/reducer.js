export const initialState = {listProducts: []};

export const reducer = (state, action) => {
  
  console.log(action)
  switch (action.type) {
    case 'addProduct':
      return {listProducts: [...state.listProducts, action.newState]};
    default:
      throw new Error();
  }
}
