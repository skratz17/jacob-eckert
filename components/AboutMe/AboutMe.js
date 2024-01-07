import styles from './AboutMe.module.css';
import utilStyles from '../../styles/utilities.module.css';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe + ' ' + utilStyles.section__dark} id="about">
      <div className={styles.colLeft}>
        <h2 className={utilStyles.sectionHeading}>About Me</h2>
        <p className={styles.aboutMeText}>Hello there! I am Jacob Eckert, a Nashville native who absolutely loves all things web development. I am currently on a team building awesome tools to support operations in specialty delivery spaces at Amazon, most centrally supporting Amazon's Sub-Same Day Delivery warehouses.</p>

        <p className={styles.aboutMeText}>My initial motivation for starting to learn about code came from a desire to see if programming languages were at all akin to spoken languages, as I have always been very interested in foreign languages. While I quickly found there to be quite large differences between the two, learning how to code allowed me to access a part of me that I previously did not know existed - a part of me that loves thinking about complex problems, then using the language of code to communicate my solutions to those problems, and finally putting those solutions into action. Strengthening my programming knowledge and skills in college, in employment, and in personal projects has only served to cement my love of software development, and it is a passion I will carry with me throughout my whole life.</p>

        <p className={styles.aboutMeText}>Aside from my love of software and foreign languages, I am also an enormous music fan, having worked in both full-time and part-time capacities at (if I may say so myself) Nashville's <em>premier</em> independent record store, Grimey's New and Preloved Music, for over a decade. As a result, I have far too large of a record collection for any sensible human to have.</p>

      </div>
      <div className={styles.colRight}>
        <img className={styles.aboutMeImage} src="/images/aboutMe/jacobEckert.png" alt="Jacob Eckert Standing and Wearing Suit"/>
      </div>
    </section>
  )
};

export default AboutMe;