import { useState } from 'react';

import styles from './ImageSlider.module.css';

const ImageSlider = props => {
  const { images } = props;

  const [ activeImageIndex, setActiveImageIndex ] = useState(0);

  const renderControls = () => {
    const controls = [];
    
    if(activeImageIndex !== 0) {
      controls.push(<button onClick={() => setActiveImageIndex(prevIndex => prevIndex - 1)}>Prev</button>);
    }
    
    if(activeImageIndex !== images.length - 1) {
      controls.push(<button onClick={() => setActiveImageIndex(prevIndex => prevIndex + 1)}>Next</button>);
    }

    return controls;
  };

  return (
    <div className={styles.imageSlider}>
      <img className={styles.image} src={images[activeImageIndex].src} alt={images[activeImageIndex].alt}/>
      <div>
        { renderControls() }
      </div>
    </div>
  );
};

export default ImageSlider;