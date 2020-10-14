import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  const { project, onSelect } = props;
  const { image, name, shortDescription } = project;

  const handleProjectLinkClick = (e, name) => {
    e.preventDefault();
    onSelect(name);
  };

  return (
    <div className={styles.projectCard}>
      <img className={styles.projectCardImage} src={image.src} alt={image.alt} />
      <h3 className={styles.projectCardName}>
        <a onClick={e => handleProjectLinkClick(e, name)}>{name}</a>
      </h3>
      <p className={styles.projectCardDescription}>{shortDescription}</p>
    </div>
  )
};

export default ProjectCard;