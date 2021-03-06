import { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import TableOfContentsEntry from '../TableOfContentsEntry/TableOfContentsEntry';
import TABLE_OF_CONTENTS_ENTRIES from '../tableOfContentsConfig';
import styles from './TableOfContentsMenu.module.css';


const scrollLocations = {};
TABLE_OF_CONTENTS_ENTRIES.forEach(t => scrollLocations[t.href] = null);

const TableOfContentsMenu = props => {
  const [ activeItem, setActiveItem ] = useState(null);
  const [ scrollPos, setScrollPos ] = useState(0);
  const [ isExpanded, setIsExpanded ] = useState(false);

  useEffect(() => {
    smoothscroll.polyfill();

    // mutation observer to update scroll locations on mutations that change scroll positions of elements on the page (e.g., expanding a resume list item)
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.querySelector('#main'), {
      childList: true,
      subtree: true
    });
    getAnchorPoints();

    // resize listener to update scroll locations when user resizes the browser window 
    window.addEventListener('resize', getAnchorPoints);

    window.addEventListener('scroll', handleScroll);
  }, []);

  // debounce the scroll event, only fire section update logic after scrolling stops for 100ms
  useEffect(() => {
    const timeoutId = setTimeout(handleScrollSectionUpdate, 100);

    return () => clearTimeout(timeoutId);
  }, [ scrollPos ]);

  // build object mapping section hash links to the scroll position of that section on the page
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 25;
    Object.keys(scrollLocations).forEach(sectionHref => {
      scrollLocations[sectionHref] = document.querySelector(sectionHref).getBoundingClientRect().top + curScroll
    });
  };

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  const handleScrollSectionUpdate = () => {
    let curSection = null;

    const fromBottom = Object.keys(scrollLocations).reverse();
    for(const sectionHref of fromBottom) {
      if(curSection === null && scrollLocations[sectionHref] < scrollPos) {
        curSection = sectionHref;
        break;
      }
    }

    if(curSection !== activeItem) {
      setActiveItem(curSection);
    }
  };

  const handleNavigation = event => {
    setIsExpanded(false);
    props.onNavigate(event);
  };

  let menuContent;

  if(activeItem && isExpanded) {
    menuContent = (
      <nav className={styles.fixedMenu + ' ' + styles.menuNav}>
        <button className={styles.closeMenuButton} onClick={() => setIsExpanded(false)}>
          <i className="material-icons">highlight_off</i>
        </button>
        <ul>
          {
            TABLE_OF_CONTENTS_ENTRIES.map(t => (
              <TableOfContentsEntry onClick={handleNavigation} key={t.href} href={t.href} linkText={t.linkText} />
            )) 
          }
        </ul>
      </nav>
    );
  }

  else {
    let chapterIndex = TABLE_OF_CONTENTS_ENTRIES.findIndex(t => t.href === activeItem);
    if(chapterIndex === undefined) chapterIndex = -1;
    const linkText = chapterIndex > -1 ? TABLE_OF_CONTENTS_ENTRIES[chapterIndex].linkText : '';

    const classNames = [ styles.fixedMenu, styles.menuExpandButton ];
    if(!activeItem) classNames.push(styles.hidden);

    menuContent = (
      <button className={classNames.join(' ')} onClick={() => setIsExpanded(true)}>
        <i className="material-icons">import_contacts</i>
        <span className={styles.chapterTitle}>
          Chapter { chapterIndex + 1 }: { linkText }
        </span>
      </button>
    );
  }

  return menuContent;
};

export default TableOfContentsMenu;