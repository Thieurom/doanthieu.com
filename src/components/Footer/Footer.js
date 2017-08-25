import React from 'react';
import styles from './Footer.module.sass';


const Footer = () => (
    <footer className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>thieurom@gmail.com</li>
                    <li className={styles.listItem}>2017 - Doan Thieu</li>
                    <li className={styles.listItem}>Made with <i className='fa fa-coffee'></i></li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <a href='https://github.com/Thieurom' className={styles.link}>Github</a>
                    </li>
                    <li className={styles.listItem}>
                        <a href='https://codepen.io/thieurom' className={styles.link}>Codepen</a>
                    </li>
                    <li className={styles.listItem}>
                        <a href='https://twitter.com/lethieu' className={styles.link}>Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);


export default Footer;
