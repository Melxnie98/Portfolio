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
    // Close the menu after navigation (optional)
    setMenuOpen(false);
  };

  useEffect(() => {
    // Check the screen size on initial load and on resize
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <header className={styles.scrollableHeader}>
    <div className={styles.navigation}>
      <div className={styles.headerContent}>

        {/* Logo should be a link */}
        <a href="/index" onClick={() => navigateTo('/index')}>
          <img
            src="/images/MLlogo.webp"
            alt="ML logo"
            className={styles.logo}
          />
        </a>

        {/* Burger button */}
        {isSmallScreen && (
          <button
            className={styles.burgerIcon}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
          >
            <img src="/images/menu.svg" alt="" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        )}

        {/* Navigation */}
        <nav aria-label="Main navigation">
          {!isSmallScreen && (
            <ul className={styles.navList}>
              <li><a href="/index">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/Education">Education</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/accessBugs">AccessBugs</a></li>
              <li><a href="/accessBugsTwo">AccessBugsTwo</a></li>
              <li><a href="/accessBugsThree">AccessBugsThree</a></li>
            </ul>
          )}

          {isMenuOpen && (
            <ul id="main-menu" className={styles.dropdownMenu}>
              <li><a href="/index">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/Education">Education</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/accessBugs">AccessBugs</a></li>
              <li><a href="/accessBugsTwo">AccessBugsTwo</a></li>
              <li><a href="/accessBugsThree">AccessBugsThree</a></li>
            </ul>
          )}
        </nav>

      </div>
    </div>
  </header>
);

export default ScrollableHeader;