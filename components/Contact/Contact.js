import utilStyles from '../../styles/utilities.module.css';
import CircleIcon from '../CircleIcon/CircleIcon';
import styles from './Contact.module.css';

const EXTERNAL_LINKS = [
  { 
    href: 'https://www.linkedin.com/in/jacob-w-eckert/', 
    src: '/images/contact/linkedIn.png', 
    alt: 'LinkedIn' 
  },
  { 
    href: 'https://github.com/skratz17/',
    src: '/images/contact/github.png', 
    alt: 'GitHub' 
  }
];

const Contact = () => {
  return (
    <section className={styles.contact + ' ' + utilStyles.section__dark} id="contact">
      <h2 className={utilStyles.sectionHeading}>Contact Me</h2>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/email.png"
          alt="E-mail"
          width="80" />
        <a href="mailto:jweckert17@gmail.com">jweckert17@gmail.com</a>
      </div>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/phone.png"
          alt="Phone"
          width="80" />
        <a href="tel:+16157153266">(615) 715-3266</a>
      </div>

      <div className={styles.contactMethod}>
        <CircleIcon src="/images/contact/address.png"
          alt="Location"
          width="80" />
        <p>Greater Nashville Area</p>
      </div>

      <div className={styles.externalLinks}>
        {
          EXTERNAL_LINKS.map(c => (
            <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
              <CircleIcon src={c.src} alt={c.alt} width="80" />
            </a>
          ))
        }
      </div>
    </section>
  )
};

export default Contact;