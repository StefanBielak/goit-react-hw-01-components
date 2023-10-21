import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
  <table className={styles['transaction-history']}>
    <thead>
        <tr className={styles["table-header"]}>
          <th className={styles["table-header-item"]}>Type</th>
          <th className={styles["table-header-item"]}>Amount</th>
          <th className={styles["table-header-item"]}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={styles["table-row"]} key={item.id}>
            <td className={styles["table-row-item"]}>{item.type}</td>
            <td className={styles["table-row-item"]}>{item.amount}</td>
            <td className={styles["table-row-item"]}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;