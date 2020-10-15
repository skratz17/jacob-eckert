import styles from './ProjectCard.module.css';

const ProjectCard = props => {
  const { project, onSelect } = props;
  const { images, name, shortDescription } = project;
  const mainImage = images[0];

  const handleProjectLinkClick = (e, name) => {
    e.preventDefault();
    onSelect(name);
  };

  const handleKeyUp = (e, name) => {
    if(e.key === 'Enter') {
      handleProjectLinkClick(e, name);
    }
  };

  return (
    <div className={styles.projectCard}>
      <img className={styles.projectCardImage} src={mainImage.src} alt={mainImage.alt} />
      <h3 className={styles.projectCardName}>
        <a tabIndex="0" 
          onClick={e => handleProjectLinkClick(e, name)} 
          onKeyUp={e => handleKeyUp(e, name)}>
            {name}
        </a>
      </h3>
      <p className={styles.projectCardDescription}>{shortDescription}</p>
    </div>
  )
};

export default ProjectCard;