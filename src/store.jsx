import { combineReducers, createStore } from "redux"
import { accountReducer } from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

const store = createStore(rootReducer)

// store.dispatch(deposit(10000))
// store.dispatch(withdraw(5000))
// store.dispatch(requestLoan(8000, "buy a vehicle"))
// store.dispatch(payloan())

// store.dispatch(createCustomer("Annath", 114))
// store.dispatch(updateName("Ann"))

// store.dispatch({ type: 'account/deposit', payload: 2000 })
// store.dispatch({type: 'account/withdraw', payload: 1000})
// store.dispatch({ type: 'account/requestLoan', payload: { amount: 500, purpose: "Buy a car"}})
// store.dispatch({type:'account/payloan'})

// console.log(store.getState())

export default store