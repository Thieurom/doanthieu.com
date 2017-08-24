import React from 'react';
import Link from 'gatsby-link';
import styles from './Navigation.module.sass';


const Navigation = () => (
    <nav className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <div className={styles.home}>
                    <Link to='/'>
                        <div className={styles.siteLogo}></div>
                    </Link>
                </div>
                <div className={styles.nav}>
                    <div className={styles.current}>
                        <h2>Learn</h2>
                    </div>
                    <ul className={styles.links}>
                        <Link to='/learn' className={styles.link} activeClassName={styles.activeLink}>Learn</Link>
                        <Link to='/create' className={styles.link} activeClassName={styles.activeLink}>Create</Link>
                        <Link to='/reflect' className={styles.link} activeClassName={styles.activeLink}>Reflect</Link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);


export default Navigation;
