import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function Transactions({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.headString}>
          <th className={s.headItem}>Type</th>
          <th className={s.headItem}>Amount</th>
          <th className={s.headItem}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transactions.map(el => (
          <tr className={s.string} key={el.id}>
            <td className={s.item}>{el.type}</td>
            <td className={s.item}>{el.amount}</td>
            <td className={s.item}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
