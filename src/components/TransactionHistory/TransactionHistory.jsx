import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.transactionHistory)}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableCol}>{item.type}</td>
            <td className={css.tableCol}>{item.amount}</td>
            <td className={css.tableCol}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
};

export default TransactionHistory;
