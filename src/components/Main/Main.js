import React from 'react';
import styles from './Main.module.sass';


const Main = () => (
    <main>
        <div className={styles.inner}>
            <section className={styles.section}>
                <aside className={styles.aside}>
                    <h3>06/2017</h3>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h4>Back End Development Program</h4>
                        <span className={styles.subheading}>freeCodeCamp</span>
                    </div>
                    <p className={styles.body}>freeCodeCamp (also referred to as “Free Code Camp”) is a nonprofit organization that consists of an interactive learning web platform, an online community forum, chat rooms, Medium publications, and local organizations that intend to make learning web development accessible to anyone.</p>
                    <p className={styles.body}>This program requires building 10 dynamic web applications, which involves setup web server, database, API, authentication, hosting, ...</p>
                </div>
            </section>

            <section className={styles.section}>
                <aside className={styles.aside}>
                    <h3>04/2017</h3>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h4>Server-side Development with NodeJS</h4>
                        <span className={styles.subheading}>Coursera</span>
                    </div>
                    <p className={styles.body}>Coursera provides universal access to the world’s best education, partnering with top universities and organizations to offer courses online.</p>
                        <p className={styles.body}>This is an online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera</p>
                </div>
            </section>

            <section className={styles.section}>
                <aside className={styles.aside}>
                    <h3>11/2016</h3>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h4>Front End Development Program</h4>
                        <span className={styles.subheading}>freeCodeCamp</span>
                    </div>
                    <p className={styles.body}>This program requires building 10 front end projects, from static pages (HTML and CSS only) to more complex and highly-interactive ones like games, consuming third-party API apps, ... All code hosted on Codepen.io.</p>
                </div>
            </section>
        </div>
    </main>
);


export default Main;
