

import AccountOperations from "./components/Features/Account/AccountOperations";
import BalanceDisplay from "./components/Features/Account/BalanceDisplay";
import './App.css'
import Customer from "./components/Features/Customers/Customer";
import CreateCustomer from "./components/Features/Customers/CreateCustomer";
import { useSelector } from "react-redux";




function App() {
  const fullname = useSelector((state) => state.Customer.fullName)

  return (
    <div>
      <h1>🏦 Welcome to NITHI Bank ⚛️</h1>
      {fullname === "" ? (
        <CreateCustomer />
      ) : (
        <>
      <Customer/>
      <AccountOperations />
      <BalanceDisplay />
      </>
      )

      }


    </div>
  );
}

export default App;
