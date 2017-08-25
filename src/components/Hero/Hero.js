import React from 'react';
import Link from 'gatsby-link';
import styles from './Hero.module.sass';


const Hero = () => (
    <section className={styles.root}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <h1>Hi! I'm Doan Thieu</h1>
                <p className={styles.subheading}>I'm a self-taught Web Developer based in Hanoi, Vietnam.</p>
                <p className={styles.subheading}>I'm interested in both front-end and back-end web development. I can write HTML, CSS, JavaScript, Ruby and use Sass, React, Express, MongoDB, Ruby on Rails, PostgreSQL.</p>
                <p className={styles.subheading}>More about me, let's see what I <Link to='/learn' className={styles.link}>learn</Link>, <Link to='/create' className={styles.link}>create</Link>, <Link to='/reflect' className={styles.link}>reflect</Link>.</p>
            </div>
        </div>
    </section>
);


export default Hero;
