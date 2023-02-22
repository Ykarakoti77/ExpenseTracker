import React, {useContext} from "react";
import { GlobalContext } from "../context/GloablState";


export const Balance = () => {
  const { transaction }  = useContext(GlobalContext);

  const amounts = transaction.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  // console.log(total);
  return (
    <>
      <h4>Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
