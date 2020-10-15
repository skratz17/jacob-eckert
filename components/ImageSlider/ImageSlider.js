import { useState } from 'react';

import styles from './ImageSlider.module.css';

const ImageSlider = props => {
  const { images } = props;

  const [ activeImageIndex, setActiveImageIndex ] = useState(0);

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