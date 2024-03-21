import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th className={styles.transactionTitle}>Type</th>
          <th className={styles.transactionTitle}>Amount</th>
          <th className={styles.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={styles.transactionItem}>
            <td className={styles.transactionText}>{item.type}</td>
            <td className={styles.transactionText}>{item.amount}</td>
            <td className={styles.transactionText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
