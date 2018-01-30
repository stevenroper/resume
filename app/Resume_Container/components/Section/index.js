import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';


function Section(props) {

  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <hr className={styles.divider}/>
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
