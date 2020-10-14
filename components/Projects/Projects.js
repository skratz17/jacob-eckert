import { useState } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
import Modal from '../Modal/Modal';
import PROJECTS from './projectsConfig.js';
import styles from './Projects.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Projects = () => {
  const [ selectedProject, setSelectedProject ] = useState(null);

  return <>
    <section className={styles.projects + ' ' + utilStyles.section__dark} id="projects">
      <h2 className={utilStyles.sectionHeading}>Projects</h2>
      <div className={styles.projectsGrid}>
        { PROJECTS.map(p => <ProjectCard project={p} onSelect={setSelectedProject} />) }
      </div>
    </section>

    <Modal isShowing={selectedProject} onClose={() => setSelectedProject(null)}>
      <div>projecto</div>
    </Modal>
  </>
};

export default Projects;