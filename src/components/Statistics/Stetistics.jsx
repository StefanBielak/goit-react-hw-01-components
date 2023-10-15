import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles['stat-list']}>
      {stats.map(stat => (
        <li key={stat.id} className={styles.item}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;