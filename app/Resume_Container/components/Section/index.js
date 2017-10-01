import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';


function Section(props) {
  const styles = {
    container: {
      margin: '0 15px',
      width: '100%',
      maxWidth: '590px',
    },
    title: {
      textTransform: 'uppercase',
      fontSize: '1.5em',
      textAlign: 'center',
      color: colors.blue,
      fontWeight: 'bold',
    },
    divider: {
      border: 0,
      borderTop: '1px solid rgba(0, 0, 0, 0.15)'
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{props.title}</div>
      <hr style={styles.divider}/>
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
