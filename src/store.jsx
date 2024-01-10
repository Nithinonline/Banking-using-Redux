
import accountReducer  from "./Components/Features/Account/accountSlice"
import { customerReducer } from "./Components/Features/Customers/customerSlice"

import { configureStore } from "@reduxjs/toolkit"


const store=configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer,
    }
})


export default store