import './App.css';
import { Header } from './Component/Header';
import { Balance } from './Component/Balance';
import { IncomeExpense } from './Component/IncomeExpense';
import { TransactionList } from './Component/TransactionList';
import { AddTransaction } from './Component/AddTransaction';

import { GLobalProvider } from './context/GloablState';

function App() {
  return (
    <GLobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GLobalProvider>
  );
}

export default App;

