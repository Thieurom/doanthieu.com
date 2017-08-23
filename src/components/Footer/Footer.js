import React from 'react';
import styles from './Footer.module.sass';


const Footer = () => (
    <footer className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <p className={styles.footText}>2017. Doan Thieu.</p>
                <ul className={styles.socialList}>
                    <li className={styles.social}>
                        <a href='https://github.com/Thieurom'>Github</a>
                    </li>
                    <li className={styles.social}>
                        <a href='https://codepen.io/thieurom'>Codepen</a>
                    </li>
                    <li className={styles.social}>
                        <a href='https://twitter.com/lethieu'>Twitter</a>
                    </li>
                    <li className={styles.social}>
                        <a href='mailto:me@doanthieu.com'>Email</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);


export default Footer;
