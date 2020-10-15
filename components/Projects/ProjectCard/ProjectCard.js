import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  const { project, onSelect } = props;
  const { images, name, shortDescription } = project;
  const mainImage = images[0];

  const handleProjectLinkClick = (e, name) => {
    e.preventDefault();
    onSelect(name);
  };

  return (
    <div className={styles.projectCard}>
      <img className={styles.projectCardImage} src={mainImage.src} alt={mainImage.alt} />
      <h3 className={styles.projectCardName}>
        <a onClick={e => handleProjectLinkClick(e, name)}>{name}</a>
      </h3>
      <p className={styles.projectCardDescription}>{shortDescription}</p>
    </div>
  )
};

export default ProjectCard;