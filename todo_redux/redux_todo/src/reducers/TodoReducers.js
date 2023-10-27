 const TodoReducer = (state={tod:[] },action)=>{
    switch (action.type) {
      case "ADD":
        return{tod:action.payload};

      case "REMOVE":
        return{tod:action.payload};

    
        default:
          return state;
    }
};
export default TodoReducer;