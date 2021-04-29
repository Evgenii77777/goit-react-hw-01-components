import React from "react";
import transactions from "../../transactions.json";
import TransactionItem from "./transactionsiten/TransactionItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
