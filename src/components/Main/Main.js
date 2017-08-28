import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import frontendProjects from '../../pages/projects/frontends.yaml';
import backendProjects from '../../pages/projects/backends.yaml';
import styles from './Main.module.sass';


const Main = () => (
    <main>
        <div className={styles.inner}>
            <section className={styles.mainSection}>
                <aside className={styles.aside}>
                    <h4>06/2017</h4>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h3>Back End Development Program</h3>
                        <span className={styles.subheading}>freeCodeCamp</span>
                    </div>
                    <section className={styles.subSection}>
                        <p className={styles.body}>freeCodeCamp is a nonprofit organization that consists of an interactive learning web platform, an online community forum, chat rooms, Medium publications, and local organizations that intend to make learning web development accessible to anyone.</p>
                        <p className={styles.body}>This program requires building 10 dynamic web applications, which involves setup web server, database, API, authentication, ... Apps deployed on Heroku, source code hosted on Github.</p>
                    </section>
                    <section className={styles.subSection}>
                        <h5>Certification</h5>
                        <img className={styles.cert} src='http://via.placeholder.com/1200x800?text=Certification' />
                    </section>
                    <section className={styles.subSection}>
                        <h5>Featured Projects</h5>
                        <ProjectList data={backendProjects} />
                    </section>
                </div>
            </section>

            <section className={styles.mainSection}>
                <aside className={styles.aside}>
                    <h4>04/2017</h4>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h3>Server-side Development with NodeJS</h3>
                        <span className={styles.subheading}>Coursera</span>
                    </div>
                    <section className={styles.subSection}>
                        <p className={styles.body}>Coursera provides universal access to the world’s best education, partnering with top universities and organizations to offer courses online.</p>
                        <p className={styles.body}>This is an online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera</p>
                    </section>
                    <section className={styles.subSection}>
                        <h5>Certification</h5>
                        <img className={styles.cert} src='http://via.placeholder.com/1200x800?text=Certification' />
                    </section>
                </div>
            </section>

            <section className={styles.mainSection}>
                <aside className={styles.aside}>
                    <h4>11/2016</h4>
                </aside>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h3>Front End Development Program</h3>
                        <span className={styles.subheading}>freeCodeCamp</span>
                    </div>
                    <section className={styles.subSection}>
                    <p className={styles.body}>This program requires building 10 front end projects, from static pages (HTML and CSS only) to more complex and highly-interactive ones like games, consuming third-party API apps, ... All code hosted on Codepen.io.</p>
                    </section>
                    <section className={styles.subSection}>
                        <h5>Certification</h5>
                        <img className={styles.cert} src='http://via.placeholder.com/1200x800?text=Certification' />
                    </section>
                    <section className={styles.subSection}>
                        <h5>Featured Projects</h5>
                        <ProjectList data={frontendProjects} />
                    </section>
                </div>
            </section>
        </div>
    </main>
);


export default Main;
