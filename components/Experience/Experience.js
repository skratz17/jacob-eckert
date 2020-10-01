import ResumeList from '../ResumeList/ResumeList';
import EXPERIENCE from './experienceConfig';
import styles from './Experience.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Experience = () => {
  return (
    <section className={styles.experience + ' ' + utilStyles.section__light}>
      <h2 className={styles.sectionHeading + ' ' + utilStyles.sectionHeading}>Experience &amp; Education</h2>
      <div>
        <h3 className={styles.resumeListHeader}>Work History</h3>
        <ResumeList roles={EXPERIENCE} />
      </div>
    </section>
  );
};

export default Experience;