import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.introCard}>
        <h2>Full-Stack Web Developer</h2>
        <h1>Jacob Eckert</h1>
        <h2>In the Greater Nashville Area</h2>
      </div>
    </section>
  );
};

export default Introduction;