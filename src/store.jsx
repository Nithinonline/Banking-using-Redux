import { combineReducers, createStore } from 'redux'

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}


//Account Reducer
function AccountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload };

        case 'account/withdraw':
            return { ...state, balance: state.balance - action.payload };

        case 'account/requestLoan':
            if (state.loan > 0) return state;


            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            }


            return { ...state, loan: action.payload };
        case 'account/payloan':
            return {
                ...state,
                loan: state.loan - action.payload,
                loanPurpose: "",
                balance: state.balance - state.loan
            };
        default:
            return state;

    }
}



function customerReducer(state = initialStateCustomer, action) {

    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            };

        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload,
            };

        default:
            return state;
    }

}



const rootReducer=combineReducers({
    account:AccountReducer,
    customer:customerReducer
})


const store = createStore(rootReducer)


// added

function deposit(amount) {
    return { type: "account/deposit", payload: amount }
}

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount }
}

function requestLoan(amount, purpose) {
    return {
        type: "account/requestLoan",
        payload: { amount: amount, purpose: purpose }
    }
}

function payloan(amount) {
    return { type: "account/payloan", payload: amount }
}

function createCustomer(fullName,nationalID,createdAt){
    return{ type:"customer/createCustomer",
            payload:{fullName:fullName,
                     nationalID:nationalID,
                    createdAt: new Date().toISOString(),
                }
}
}

function updateName(fullName){
    return { type:"account/updateName",payload:fullName}
}


// store.dispatch({ type: "account/deposit", payload: 2000 })
// store.dispatch({ type: "account/withdraw", payload: 500 })
// store.dispatch({  type: "account/requestLoan",
//     payload: { amount: 2000, purpose: "To Buy a Car" }
// })
// store.dispatch({ type:"account/payloan" })

//action calls
store.dispatch(deposit(5000))
store.dispatch(withdraw(2000))
store.dispatch(requestLoan(10000, "Buy a car"))
store.dispatch(payloan(8000))
console.log(store.getState())

//createCustomer
store.dispatch(createCustomer("Nithin","PANNIFXJ05"))

console.log(store.getState());






