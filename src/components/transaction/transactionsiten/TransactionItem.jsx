import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ transaction }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{transaction.type}</td>
      <td className={styles.td}>{transaction.amount}</td>
      <td className={styles.td}>{transaction.currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
