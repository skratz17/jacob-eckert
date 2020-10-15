import ImageSlider from '../../ImageSlider/ImageSlider';
import styles from './ProjectDetail.module.css';

const ProjectDetail = props => {
  const { project } = props;

  if(project === null) {
    return null;
  }

  const { name, images, description, features, deployedLink, projectLink } = project;

  return (
    <div className={styles.projectDetail}>
      <ImageSlider images={images} />
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.features}>
        { features.map((f, index) => <li key={index}>{f}</li>) }
      </ul>
      <div className={styles.links}>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Check it out!</a>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default ProjectDetail;