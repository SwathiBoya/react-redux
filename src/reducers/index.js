
const reducer = (state = {counter:1}, action) => {

    switch (action.type) {
      case 'HELLO_REACT':
        return {  say : 'Hello World Redux'  };
      case 'ADD_ITEM':
        return {say : 'I AM ADDED' };
      case 'HELLO_WORLD':
        return {say : 'Hello World' };
      case 'INCREMENT':
      return {...state,say : state.counter++};
      case 'DECREMENT':
        if(state.counter>0){    
          return {...state,say : state.counter--};
        }
      default:
        return state;
    }
    
  };
  
  export default reducer;