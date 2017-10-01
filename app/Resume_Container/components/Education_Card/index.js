import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';


function Education_Card(props) {
  let styles = {
    container: {
      margin: '20px 0',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.35)',
      padding: '10px',
      borderRadius: '2px',
    },
    educationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    major: {
      fontSize: '2em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '-8px',
      color: colors.blue,
    },
    school: {
      fontSize: '1.2em',
    },
    dates: {
      fontSize: '1.3em',
    },
    divider: {
      border: 0,
      borderTop: '1px solid rgba(0, 0, 0, 0.15)',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.educationHeader}>
        <div>
          <div style={styles.major}>{props.major}</div>
          <div style={styles.school}>{props.school}</div>
        </div>
        <div style={styles.dates}>
          {props.dates}
        </div>
      </div>
      <hr style={styles.divider} />
      <div style={styles.description}>
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
