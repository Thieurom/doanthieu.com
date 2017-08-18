import React from 'react';
import Link from 'gatsby-link';
import styles from './Header.module.sass';


const Header = () => (
    <header className={styles.header}>
        <div className={styles.inner}>
            <Link to='/'>
                <div className={styles.siteLogo}></div>
            </Link>
            <nav className={styles.nav}>
                <Link to='/learn' className={styles.navItem}>Learn</Link>
                <Link to='/create' className={styles.navItem}>Create</Link>
                <Link to='/reflect' className={styles.navItem}>Reflect</Link>
            </nav>
        </div>
    </header>
);


export default Header;
