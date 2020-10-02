import utilStyles from '../../styles/utilities.module.css';
import CircleIcon from '../CircleIcon/CircleIcon';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact + ' ' + utilStyles.section__dark}>
      <h2 className={utilStyles.sectionHeading}>Contact Me</h2>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/email.png"
          alt="E-mail"
          width="75" />
        <a href="mailto:jweckert17@gmail.com">jweckert17@gmail.com</a>
      </div>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/phone.png"
          alt="Phone"
          width="75" />
        <a href="tel:+16157153266">(615) 715-3266</a>
      </div>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/address.png"
          alt="Location"
          width="75" />
        <p>Greater Nashville Area</p>
      </div>
    </section>
  )
};

export default Contact;