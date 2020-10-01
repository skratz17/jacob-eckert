import styles from './TableOfContents.module.css';
import utilStyles from '../../styles/utilities.module.css';
import TableOfContentsEntry from './TableOfContentsEntry/TableOfContentsEntry';

const TABLE_OF_CONTENTS_ENTRIES = [
  {
    href: '#about',
    linkText: 'About Me',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid necessitatibus in quidem ducimus officiis nemo eum eveniet, inventore delectus laborum quos voluptatum quam obcaecati quis similique corrupti qui mollitia. Dignissimos!'
  },
  {
    href: '#experience',
    linkText: 'Experience & Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque nostrum aspernatur delectus, consectetur, eveniet suscipit earum non sapiente, impedit corporis necessitatibus ducimus magnam illo fuga qui laboriosam. Est, debitis?'
  },
  {
    href: '#projects',
    linkText: 'Projects',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto tempora, quas exercitationem fuga aperiam omnis blanditiis quibusdam consectetur quisquam, enim reiciendis eum mollitia ab voluptates? A maiores officiis dolorem!'
  },
  {
    href: '#technologies',
    linkText: 'Technologies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vel ipsum hic quaerat inventore est cum, blanditiis magni accusamus veritatis corrupti corporis, sapiente quo temporibus voluptas labore aliquam aperiam sint?'
  },
  {
    href: '#contact',
    linkText: 'Contact',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sunt ad sed adipisci aliquam itaque reiciendis animi odio vitae eum sequi repellat commodi. Qui pariatur dolorem aliquam et nisi totam!'
  }
];

const TableOfContents = () => {
  return (
    <section className={styles.tableOfContents + ' ' + utilStyles.section__light}>
      <h2 className={styles.header}>Contents</h2>
      <ol className={styles.tableOfContentsList}>
        { 
          TABLE_OF_CONTENTS_ENTRIES.map(t => (
            <TableOfContentsEntry key={t.href} href={t.href} linkText={t.linkText}>
              {t.description}
            </TableOfContentsEntry>
          )) 
        }
      </ol>
    </section>
  );
};

export default TableOfContents;