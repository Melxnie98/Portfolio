// components/ScrollableHeader.js

import { useRouter } from 'next/navigation'; // ✅ FIXED
import React, { useState, useEffect } from 'react';
import styles from './ScrollableHeader.module.css';

const ScrollableHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navigateTo = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.scrollableHeader}>
      <div className={styles.navigation}>
        <div className={styles.headerContent}>

          {/* Logo as button */}
          <button
            onClick={() => navigateTo('/')}
            className={styles.logoButton}
          >
            <img
              src="/images/MLlogo.webp"
              alt="ML logo"
              className={styles.logo}
            />
          </button>

          {/* Burger menu */}
          {isSmallScreen && (
            <button
              className={styles.burgerIcon}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
            >
              <img src="/images/menu.svg" alt="" />
              <span className="sr-only">Toggle navigation</span>
            </button>
          )}

          {/* Navigation */}
          <nav aria-label="Main navigation">
            {!isSmallScreen && (
              <ul className={styles.navList}>
                <li><button onClick={() => navigateTo('/')}>Home</button></li>
                <li><button onClick={() => navigateTo('/about')}>About</button></li>
                <li><button onClick={() => navigateTo('/experience')}>Experience</button></li>
                <li><button onClick={() => navigateTo('/Education')}>Education</button></li>
                <li><button onClick={() => navigateTo('/contact')}>Contact</button></li>
                <li><button onClick={() => navigateTo('/accessBugs')}>AccessBugs</button></li>
                <li><button onClick={() => navigateTo('/accessBugsTwo')}>AccessBugsTwo</button></li>
                <li><button onClick={() => navigateTo('/accessBugsThree')}>AccessBugsThree</button></li>
              </ul>
            )}

            {/* Mobile dropdown */}
            {isMenuOpen && (
              <ul id="main-menu" className={styles.dropdownMenu}>
                <li><button onClick={() => navigateTo('/')}>Home</button></li>
                <li><button onClick={() => navigateTo('/about')}>About</button></li>
                <li><button onClick={() => navigateTo('/experience')}>Experience</button></li>
                <li><button onClick={() => navigateTo('/Education')}>Education</button></li>
                <li><button onClick={() => navigateTo('/contact')}>Contact</button></li>
                <li><button onClick={() => navigateTo('/accessBugs')}>AccessBugs</button></li>
                <li><button onClick={() => navigateTo('/accessBugsTwo')}>AccessBugsTwo</button></li>
                <li><button onClick={() => navigateTo('/accessBugsThree')}>AccessBugsThree</button></li>
              </ul>
            )}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;