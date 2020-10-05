import styles from './TableOfContents.module.css';
import utilStyles from '../../styles/utilities.module.css';
import TableOfContentsEntry from './TableOfContentsEntry/TableOfContentsEntry';
import TABLE_OF_CONTENTS_ENTRIES from './tableOfContentsConfig';

const TableOfContents = props => {
  return (
    <section className={styles.tableOfContents + ' ' + utilStyles.section__light}>
      <h2 className={styles.header}>Contents</h2>
      <ol className={styles.tableOfContentsList}>
        { 
          TABLE_OF_CONTENTS_ENTRIES.map(t => (
            <TableOfContentsEntry onClick={props.onNavigate} key={t.href} href={t.href} linkText={t.linkText}>
              {t.description}
            </TableOfContentsEntry>
          )) 
        }
      </ol>
    </section>
  );
};

export default TableOfContents;