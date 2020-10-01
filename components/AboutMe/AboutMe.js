import styles from './AboutMe.module.css';
import utilStyles from '../../styles/utilities.module.css';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe + ' ' + utilStyles.section__dark} id="#about">
      <div className={styles.colLeft}>
        <h2 className={utilStyles.sectionHeading}>About Me</h2>
        <p className={styles.aboutMeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae suscipit provident sed sint ipsam nam voluptates facere, eum accusantium tenetur. Expedita non officia iste. Vel debitis, natus amet distinctio dignissimos nisi sapiente sequi odit sunt similique fugit eaque molestias corrupti numquam modi veritatis harum qui atque dolore, blanditiis, eius obcaecati tenetur doloribus. Pariatur dolorem fuga tempora exercitationem vel tenetur.</p>
        <p className={styles.aboutMeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam voluptas dolor facere perspiciatis, tenetur repellendus nesciunt soluta odit ea cumque mollitia eaque quis iure doloribus obcaecati porro nisi quisquam nemo itaque vitae. Magnam natus placeat inventore veniam illo? Expedita maxime quasi quo quidem maiores laboriosam dignissimos, asperiores temporibus, repellendus praesentium, assumenda vitae tempore omnis?</p>
      </div>
      <div className={styles.colRight}>
        <img className={styles.aboutMeImage} src="/images/aboutMe/jacobEckert.png" alt="Jacob Eckert Standing and Wearing Suit"/>
      </div>
    </section>
  )
};

export default AboutMe;