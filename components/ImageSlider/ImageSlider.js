import { useState } from 'react';

import styles from './ImageSlider.module.css';

const ImageSlider = props => {
  const { images } = props;

  const [ activeImageIndex, setActiveImageIndex ] = useState(0);

  const renderControls = () => {
    const controls = [];
    
    if(activeImageIndex !== 0) {
      controls.push(
        <button className={styles.button + ' ' + styles.buttonPrev} onClick={() => setActiveImageIndex(prevIndex => prevIndex - 1)}>
          <i className="material-icons">navigate_before</i>
        </button>
      );
    }
    
    if(activeImageIndex !== images.length - 1) {
      controls.push(
        <button className={styles.button + ' ' + styles.buttonNext} onClick={() => setActiveImageIndex(prevIndex => prevIndex + 1)}>
          <i className="material-icons">navigate_next</i>
        </button>
      );
    }

    return controls;
  };

  return (
    <div className={styles.imageSlider}>
      <img className={styles.image} src={images[activeImageIndex].src} alt={images[activeImageIndex].alt}/>
      { renderControls() }
    </div>
  );
};

export default ImageSlider;