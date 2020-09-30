import styles from './TableOfContentsEntry.module.css';

const TableOfContentsEntry = props => {
  const { href, linkText } = props;

  return (
    <li className={styles.tableOfContentsEntry}>
      <div>
        <a href={href}>{linkText}</a>
        <p>{props.children}</p>
      </div>
    </li>
  );
};

export default TableOfContentsEntry;