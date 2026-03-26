// components/ScrollableHeader.js
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = ({ title }) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.scrollableHeader}>
      <div className={styles.navigation}>
        <div className={styles.headerContent}>

          <img
            src="/images/MLlogo.webp"
            alt="initials M L - Logo"
            className={styles.logo}
            onClick={() => navigateTo('/index')}
          />

          {/* Burger icon */}
          {isSmallScreen && (
            <button
              className={styles.burgerIcon}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
            >
              <img src="/images/menu.svg" alt="" />
            </button>
          )}

          {/* Navigation */}
          <nav aria-label="Main navigation">
            {!isSmallScreen && (
              <ul className={styles.navList}>
                <li><button className={styles.navItem} onClick={() => navigateTo('/index')}>Home</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/about')}>About</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/experience')}>Experience</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/Education')}>Education</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/contact')}>Contact</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/accessBugs')}>AccessBugs</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/accessBugsTwo')}>AccessBugsTwo</button></li>
                <li><button className={styles.navItem} onClick={() => navigateTo('/accessBugsThree')}>AccessBugsThree</button></li>
              </ul>
            )}

            {isMenuOpen && (
              <ul id="main-menu" className={styles.dropdownMenu}>
                <li><button onClick={() => navigateTo('/index')}>Home</button></li>
                <li><button onClick={() => navigateTo('/about')}>About</button></li>
                <li><button onClick={() => navigateTo('/experience')}>Experience</button></li>
                <li><button onClick={() => navigateTo('/Education')}>Education</button></li>
                <li><button onClick={() => navigateTo('/contact')}>Contact</button></li>
                <li><button onClick={() => navigateTo('/accessBugs')}>accessBugs</button></li>
                <li><button onClick={() => navigateTo('/accessBugsTwo')}>accessBugsTwo</button></li>
                <li><button onClick={() => navigateTo('/accessBugsThree')}>accessBugsThree</button></li>
              </ul>
            )}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;