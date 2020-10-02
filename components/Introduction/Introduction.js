import CircleIcon from '../CircleIcon/CircleIcon';
import styles from './Introduction.module.css';

const CONTACT_LINKS = [
  { 
    href: 'https://www.linkedin.com/in/jacob-w-eckert/', 
    src: '/images/contact/linkedIn.png', 
    alt: 'LinkedIn' 
  },
  { 
    href: 'https://github.com/skratz17/',
    src: '/images/contact/github.png', 
    alt: 'GitHub' 
  },
  { 
    href: 'mailto:jweckert17@gmail.com',
    src: '/images/contact/email.png', 
    alt: 'E-mail' 
  }
];

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.introCard}>
        <h2>Full-Stack Web Developer</h2>
        <h1>Jacob Eckert</h1>
        <h2>In the Greater Nashville Area</h2>
      </div>
      <CircleIcon src="/images/introduction/jacobeckert.jpg"
        alt="Jacob Eckert Headshot"
        width="250" />
      <div className={styles.contactIcons}>
        {
          CONTACT_LINKS.map(c => (
            <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
              <CircleIcon src={c.src} alt={c.alt} width="75" />
            </a>
          ))
        }
      </div>
    </section>
  );
};

export default Introduction;