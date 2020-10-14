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
      { props.children }
    </div>
  </>;
};

export default Modal;