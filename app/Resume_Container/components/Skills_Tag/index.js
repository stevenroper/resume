import React from 'react';
import PropTypes from 'prop-types';

import colors from 'config/colors';


function Skills_Tag(props) {
  const styles = {
    container: {
      margin: '7px 0',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.35)',
      padding: '10px 20px',
      backgroundColor: props.color || '#fff',
      color: props.color ? '#fff' : colors.blue,
      fontSize: '1.1em',
    },
  };

  return (
    <div style={styles.container}>
      {props.tagName}
    </div>
  );
}

Skills_Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Skills_Tag;
