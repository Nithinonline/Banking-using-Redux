import { applyMiddleware, combineReducers, createStore } from "redux"
import { accountReducer } from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"
import { composeWithDevTools } from "@redux-devtools/extension"



import {thunk} from "redux-thunk"


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)) );

export default store