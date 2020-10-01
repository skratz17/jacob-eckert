import { useState } from 'react';

import styles from './ResumeEntry.module.css';

const ResumeEntry = props => {
  const { role } = props;
  const { position, organization, location, start, end, details } = role;

  const [ isExpanded, setIsExpanded ] = useState(false);

  return (
    <li className={styles.resumeEntry} onClick={() => setIsExpanded(currentIsExpanded => !currentIsExpanded)}>
      <div className={styles.resumeEntryHeadingLine}>
        <h3 className={styles.resumeEntryHeading}>{position}</h3>
        <p className={styles.resumeEntryDates}>{start} - {end || 'present'}</p>
      </div>
      <div className={styles.resumeEntrySubheadingLine}>
        <h4 className={styles.resumeEntryOrganization}>{organization}</h4>
        <span className={styles.resumeEntryLocation}>{location}</span>
      </div>
      { isExpanded && 
        <ul className={styles.resumeEntryDetailsList}>
        {
          details.map(d => {
            if(typeof d === 'string') return <li>{d}</li>;

            return (
              <>
                <li>{d.subheading}
                <ul>
                  {d.details.map(dd => <li>{dd}</li>)}
                </ul>
                </li>
              </>
            )
          })
        }
        </ul>
    }
    </li>
  );
};

export default ResumeEntry;