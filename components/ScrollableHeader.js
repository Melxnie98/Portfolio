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

    return () => window.removeEventListener('resize', handleResize);
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
                <li><a href="/index" className={styles.navItem}>Home</a></li>
                <li><a href="/about" className={styles.navItem}>About</a></li>
                <li><a href="/experience" className={styles.navItem}>Experience</a></li>
                <li><a href="/Education" className={styles.navItem}>Education</a></li>
                <li><a href="/contact" className={styles.navItem}>Contact</a></li>
                <li><a href="/accessBugsThree" className={styles.navItem}>AccessBugsThree</a></li>
              </ul>
            )}

            {isMenuOpen && (
              <ul id="main-menu" className={styles.dropdownMenu}>
                <li><a href="/index" className={styles.navItem}>Home</a></li>
                <li><a href="/about" className={styles.navItem}>About</a></li>
                <li><a href="/experience" className={styles.navItem}>Experience</a></li>
                <li><a href="/Education" className={styles.navItem}>Education</a></li>
                <li><a href="/contact" className={styles.navItem}>Contact</a></li>
                <li><a href="/accessBugsThree" className={styles.navItem}>accessBugsThree</a></li>
              </ul>
            )}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default ScrollableHeader;