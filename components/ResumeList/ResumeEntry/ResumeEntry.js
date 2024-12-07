import React, { useState } from 'react';

import styles from './ResumeEntry.module.css';

const ResumeEntry = props => {
  const { role } = props;
  const { position, organization, location, start, end, details } = role;

  const [ isExpanded, setIsExpanded ] = useState(false);

  const handleKeyUp = e => {
    if(e.key === 'Enter') {
      setIsExpanded(currentIsExpanded => !currentIsExpanded);
    }
  };

  return (
    <li tabIndex="0"
      className={styles.resumeEntry} 
      onClick={() => setIsExpanded(currentIsExpanded => !currentIsExpanded)}
      onKeyUp={handleKeyUp}
    >
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
          details.map((d, index) => {
            if(typeof d === 'string') return <li key={index}>{d}</li>;

            return (
              <React.Fragment key={index}>
                <li>{d.subheading}
                <ul>
                  {d.details.map((dd, dd_index) => <li key={dd_index}>{dd}</li>)}
                </ul>
                </li>
              </React.Fragment>
            )
          })
        }
        </ul>
    }
    </li>
  );
};

export default ResumeEntry;