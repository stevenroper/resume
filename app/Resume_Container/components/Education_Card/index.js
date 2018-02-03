import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';

import styles from './styles.css';


function Education_Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.educationHeader}>
        <div className={styles.major}>{props.major}</div>
        <div className={styles.school}>{props.school}</div>
        <div className={styles.dates}>{props.dates}</div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.description}>
        {props.description}
      </div>
    </div>
  );
}

Education_Card.propTypes = {
  major: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Education_Card;
