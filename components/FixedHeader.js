// components/FixedHeader.js
import React, { useState, useEffect } from 'react';
import styles from './FixedHeader.module.css';

const FixedHeader = ({ title }) => {

  return (
    <header className={styles.fixedHeader} >
        
       <div className={styles.navigation}>
        <a href="tel:+65212761137">
          <img  src="/logos/phone.png" alt="Phone" className={`${styles.phone}${styles.icons}`}/>
        </a>
        <a href="https://github.com/Melxnie98">
        <img src="/logos/GithubLogo.png" alt="GitHub"  className={`${styles.navItem} ${styles.icons}`}/>
        </a>
        <a href="https://www.linkedin.com/in/melanie-leonard-0600a6166/">
        <img src="/logos/LinkedInLogo.png" alt="Twitter"  className={`${styles.navItem} ${styles.icons}`}/>
        </a>
       </div>
      
      
    </header>
  );
};

export default FixedHeader;
