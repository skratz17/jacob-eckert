import React from 'react';

import styles from './Backdrop.module.css'

const Backdrop = props => {
  const { isShowing, onClick } = props;

  return (
    <div className={`${styles.backdrop} ${isShowing ? styles.showing : ''}`} onClick={onClick}></div>
  );
};

export default Backdrop;