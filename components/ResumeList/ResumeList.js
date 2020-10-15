import ResumeEntry from './ResumeEntry/ResumeEntry';
import styles from './ResumeList.module.css';

const ResumeList = props => {
  const { roles } = props;

  return (
    <ul className={styles.resumeList}>
      {
        roles.map((r, index) => <ResumeEntry key={index} role={r} />)
      }
    </ul>
  )
};

export default ResumeList;