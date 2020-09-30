import styles from './CircleIcon.module.css';

const CircleIcon = props => {
  const { src, alt, width, className } = props;

  const style = { 
    width: width + 'px',
    height: width + 'px'
  };

  return (
    <div className={styles.circleIcon + (className || '')} style={style}>
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

export default CircleIcon;