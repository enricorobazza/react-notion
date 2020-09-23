import React from 'react';
import HourBoard from '../HourBoard';

import styles from './period.module.scss';

const Period = ({ title, hours }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.hourContainer}>
        {hours.map((hour, index) => (
          <HourBoard key={index} hour={hour} />
        ))}
      </div>
    </div>
  );
};

export default Period;
