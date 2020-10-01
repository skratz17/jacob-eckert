import styles from './Experience.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Experience = () => {
  return (
    <section className={styles.experience + ' ' + utilStyles.section__light}>
      <h2 className={styles.sectionHeading + ' ' + utilStyles.sectionHeading}>Experience &amp; Education</h2>
    </section>
  );
};

export default Experience;