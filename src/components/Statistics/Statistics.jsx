import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import getRandomHexColor from 'utils/colorRandomizer';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
    <section className={clsx(css.statistics)}>
          {title && (<h2 className={clsx(css.title)}>{title}</h2>)}

            <ul className={clsx(css.statList)}>
                {stats.map(stat =>
            (<li className={clsx(css.item)} key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                <span className={clsx(css.label)}>{stat.label}</span>
                <span className={clsx(css.percentage)}>{stat.percentage}%</span>
            </li>))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
};

export default Statistics;
