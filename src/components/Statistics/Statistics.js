import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import StatisticsItem from './StatisticsItem';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 slassName={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <StatisticsItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
