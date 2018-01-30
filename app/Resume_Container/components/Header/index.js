import React from 'react';

import styles from './styles.css';


function Header() {
  return (
    <div>
      <div className={styles.nameContainer}>
        <span className={styles.name}>STEVEN ROPER</span>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.email}>
          <span className={styles.reverse}>
            moc.liamg@repor.m.nevets
          </span>
        </div>
        <div className={styles.phone}>
          <span className={styles.reverse}>
            6858.376.108
          </span>
        </div>
        <div className={styles.github}>
          <span className={styles.reverse}>
            repornevets/moc.buhtig
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
