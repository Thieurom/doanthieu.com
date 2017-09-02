import React from 'react';
import styles from './Hero.module.sass';


export const HeroText = ({ children }) => (
    <div className={styles.textBlock}>
    {children}
    </div>
);


const Hero = ({ children }) => (
    <div className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </div>
);


export default Hero;
