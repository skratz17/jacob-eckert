import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  const { project, onSelect } = props;
  const { image, name, shortDescription } = project;

  return (
    <div className={styles.projectCard}>
      <img className={styles.projectCardImage} src={image.src} alt={image.alt} />
      <h3 className={styles.projectCardName} onClick={() => onSelect(name)}>{name}</h3>
      <p className={styles.projectCardDescription}>{shortDescription}</p>
    </div>
  )
};

export default ProjectCard;