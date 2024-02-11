'use client'

import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isSearchActive ? styles['search-active'] : ''}`}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-left']}>
          <span className={styles['navbar-heading']}>rasayan_</span>
        </div>

        <div className={styles['navbar-right']}>
          <div className={styles['navbar-center']}>
            {/* Mobile menu toggle button */}
            <button className={styles['mobile-menu-toggle-button']} onClick={toggleMobileMenu}>
              Menu
            </button>
            {/* Mobile menu items */}
            {isMobileMenuOpen && (
              <div className={styles['mobile-menu']}>
                <Link href="#about" scroll={true}>About</Link>
                <Link href="#work" scroll={true}>Work</Link>
                <Link href="#connect" scroll={true}>Connect</Link>
              </div>
            )}
          </div>
          <a href='https://github.com/Rasayan/prt'><FaGithub className={styles['github-icon']} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

