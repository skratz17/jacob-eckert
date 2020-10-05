import styles from './Technologies.module.css';
import utilStyles from '../../styles/utilities.module.css';
import TECHNOLOGIES from './technologiesConfig';

const Technologies = () => {
  return (
    <section className={styles.technologies + ' ' + utilStyles.section__light} id="technologies">
      <h2 className={utilStyles.sectionHeading}>Technologies</h2>
      <div className={styles.technologiesGrid}>
        { TECHNOLOGIES.map(t => (
          <div className={styles.technology}>
            <img src={t.src} alt={t.name} />
            <div>
              <p>{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;