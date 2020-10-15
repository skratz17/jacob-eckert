import React, { useEffect } from 'react';
import Backdrop from './Backdrop/Backdrop';

import styles from './Modal.module.css';

const Modal = props => {
  const { isShowing, onClose } = props;

  const handleEscape = e => {
    if(e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if(isShowing) {
      document.addEventListener('keydown', handleEscape);

      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [ isShowing ]);

  return <>
    <Backdrop isShowing={isShowing} onClick={onClose} />
    <div className={`${styles.modal} ${isShowing ? styles.showing : ''}`}>
      <button className={styles.closeButton} onClick={onClose}>
        <i className="material-icons">highlight_off</i>
      </button>
      { props.children }
      <button className={styles.closeButtonMobile} onClick={onClose}>
        Close Project
      </button>
    </div>
  </>;
};

export default Modal;