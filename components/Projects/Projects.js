import { useState } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
import ProjectDetail from './ProjectDetail/ProjectDetail';
import Modal from '../Modal/Modal';
import PROJECTS from './projectsConfig.js';
import styles from './Projects.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Projects = () => {
  const [ selectedProject, setSelectedProject ] = useState(null);

  const handleProjectSelect = name => {
    const project = PROJECTS.find(p => p.name === name);
    setSelectedProject(project);
  };

  return <>
    <section className={styles.projects + ' ' + utilStyles.section__dark} id="projects">
      <h2 className={utilStyles.sectionHeading}>Projects</h2>
      <div className={styles.projectsGrid}>
        { PROJECTS.map((p, index) => <ProjectCard key={index} project={p} onSelect={handleProjectSelect} />) }
      </div>
    </section>

    <Modal isShowing={selectedProject} onClose={() => setSelectedProject(null)}>
      <ProjectDetail project={selectedProject} />
    </Modal>
  </>
};

export default Projects;