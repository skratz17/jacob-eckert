import { useState, useEffect } from 'react';

import styles from './ImageSlider.module.css';

const ImageSlider = props => {
  const { images } = props;

  const [ activeImageIndex, setActiveImageIndex ] = useState(0);

  useEffect(() => {
    const handleKeyPress = e => {
      if(e.key === 'ArrowRight' && activeImageIndex !== images.length - 1) {
        setActiveImageIndex(prevIndex => prevIndex + 1);
      }
      else if(e.key === 'ArrowLeft' && activeImageIndex !== 0) {
        setActiveImageIndex(prevIndex => prevIndex - 1);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [activeImageIndex]);

  const renderControls = () => {
    const prevClassNames = [ styles.button, styles.buttonPrev ];
    const nextClassNames = [ styles.button, styles.buttonNext ];

    if(activeImageIndex === 0) {
      prevClassNames.push(styles.hidden)
    }
    
    if(activeImageIndex === images.length - 1) {
      nextClassNames.push(styles.hidden);
    }

    return <>
        <button className={prevClassNames.join(' ')} onClick={() => setActiveImageIndex(prevIndex => prevIndex - 1)}>
          <i className="material-icons">navigate_before</i>
        </button>

        <button className={nextClassNames.join(' ')} onClick={() => setActiveImageIndex(prevIndex => prevIndex + 1)}>
          <i className="material-icons">navigate_next</i>
        </button>
    </>;
  };

  return (
    <div className={styles.imageSlider}>
      <img className={styles.image} src={images[activeImageIndex].src} alt={images[activeImageIndex].alt}/>
      { renderControls() }
    </div>
  );
};

export default ImageSlider;