import { combineReducers, createStore } from 'redux'
import { AccountReducer } from './components/Features/Account/accountSlice'
import { customerReducer } from './components/Features/Customers/customerSlice'

 


const rootReducer=combineReducers({
    account:AccountReducer,
    customer:customerReducer
})


 const store = createStore(rootReducer)

export default store









