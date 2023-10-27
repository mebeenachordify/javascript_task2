export const AddTodoaction=(mytodo)=>(dispatch,getState)=>{
    const {
        Todo:{tod},
    
    }=getState();

    const hasTodo=tod.find(i=>i.mytodo===mytodo);
    if(!hasTodo && mytodo !==''){
        dispatch({
            type:"ADD",
            payload:[ {id:mytodo,mytodo}, ...tod],
        })

    }
};

export const RemoveTodoAction=(mytodo)=>(dispatch,getState)=>{
    const {Todo: {tod},
 }= getState()
 dispatch({
    type:"REMOVE",
    payload: tod.filter((m) => mytodo !== m),
 });

};