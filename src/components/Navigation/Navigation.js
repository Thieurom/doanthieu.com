import React from 'react';
import Link from 'gatsby-link';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.sass';


const Navigation = () => (
    <nav className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <div className={styles.home}>
                    <Logo />
                </div>
                <div className={styles.nav}>
                    <div className={styles.current}>
                        <h2>Learn</h2>
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link to='/learn' className={styles.link} activeClassName={styles.activeLink}>Learn</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/create' className={styles.link} activeClassName={styles.activeLink}>Create</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link to='/reflect' className={styles.link} activeClassName={styles.activeLink}>Reflect</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);


export default Navigation;
