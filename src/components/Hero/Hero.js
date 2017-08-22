import React from 'react';
import styles from './Hero.module.sass';


const Hero = () => (
    <section className={styles.hero}>
        <div className={styles.inner}>
            <div className={styles.tagline}>
                <h1><span className={styles.headingLight}>I'm</span><br/><span className={styles.headingBold}>Doan Thieu</span></h1>
                <p className={styles.subheading}>A self-taught Web Developer based in Vietnam</p>
                <ul className={styles.socialList}>
                    <li className={styles.social}>
                        <a href='https://github.com/Thieurom'><i className='fa fa-github'></i></a>
                    </li>
                    <li className={styles.social}>
                        <a href='https://codepen.io/thieurom'><i className='fa fa-codepen'></i></a>
                    </li>
                    <li className={styles.social}>
                        <a href='https://twitter.com/lethieu'><i className='fa fa-twitter'></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);


export default Hero;
