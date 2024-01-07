import styles from './Footer.module.css';
import utilStyles from '../../styles/utilities.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer + ' ' + utilStyles.section__light}>
      <p>Copyright &copy; 2024 Jacob Eckert</p> 
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;