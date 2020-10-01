import ProjectCard from './ProjectCard/ProjectCard';
import PROJECTS from './projectsConfig.js';
import styles from './Projects.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Projects = () => {
  return (
    <section className={styles.projects + ' ' + utilStyles.section__dark}>
      <h2 className={utilStyles.sectionHeading}>Projects</h2>
      <div className={styles.projectsGrid}>
        { PROJECTS.map(p => <ProjectCard project={p} />) }
      </div>
    </section>
  )
};

export default Projects;