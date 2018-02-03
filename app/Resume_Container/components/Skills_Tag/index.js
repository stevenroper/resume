import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';

import styles from './styles.css';


function Skills_Tag(props) {
  const inlineStyles = {
    container: {
      backgroundColor: props.color || '#fff',
      color: props.color ? '#fff' : colors.blue,
    },
  };
  
  return (
    <div className={styles.container} style={inlineStyles.container}>
      {props.tagName}
    </div>
  );
}

Skills_Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Skills_Tag;
