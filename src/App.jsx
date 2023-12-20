import CreateCustomer from "./Components/CreateCustomer";
import Customer from "./Components/Customer";
import AccountOperations from "./Components/AccountOperations";
import BalanceDisplay from "./Components/BalanceDisplay";
import './App.css'

function App() {
  return (
    <div>
      <h1>🏦 Welcome to NITHI Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
