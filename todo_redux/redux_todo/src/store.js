import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";

const reducer = combineReducers({
    Todo:TodoReducer

})

const initialstate={}

const middleware=[thunk]

 const store=createStore(
    reducer,
    initialstate,
   composeWithDevTools( applyMiddleware(...middleware))
)
export default store;