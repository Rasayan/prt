'use client'

import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from '../../styles/Navbar.module.css';

import Link from 'next/link'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        setIsSearchActive(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchBlur = () => {
    setIsSearchActive(false);
  };

  function smoothScrollTo(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }
  }
  

  return (
    <nav className={`${styles.navbar} ${isSearchActive ? styles['search-active'] : ''}`}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-left']}>
          <span className={styles['navbar-heading']}>rasayan</span>
        </div>
        
        <div className={styles['navbar-right']}>
          <div className={styles['navbar-center']}>
            {/* Smooth scroll to the about section */}
            <Link href="#about" scroll={true}>About</Link>
            <Link href="#work" scroll={true}>Work</Link>
            <Link href="#connect" scroll={true}>Connect</Link>
          </div>
          <FaGithub className={styles['github-icon']} />
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;