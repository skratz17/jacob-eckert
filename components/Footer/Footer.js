import styles from './Footer.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer + ' ' + utilStyles.section__light}>
      <p>Copyright &copy; 2020 Jacob Eckert All Rights Reserved</p>
    </footer>
  );
};

export default Footer;