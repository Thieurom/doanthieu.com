import React from 'react';
import styles from './ProjectList.module.sass';


const ProjectItem = ({ project }) => (
    <div className={styles.project}>
        <figure className={styles.figure}>
            <img className={styles.image} src={project.image} alt={project.name} />
        </figure>
        <div className={styles.description}>
            <div className={styles.title}>{project.name}</div>
            <div className={styles.stacks}>
                {project.stacks.join(', ')}
            </div>
            <ul className={styles.links}>
                {project.links.map((link, index) => (
                    <ProjectLink key={index} link={link} />
                ))}
            </ul>
        </div>
    </div>
);


const ProjectLink = ({ link }) => {
    if (Object.keys(link)[0] === 'github') {
        return <li className={styles.link}><a href={link.github} target='_blank' rel='nofollow'><i className='fa fa-github'></i></a></li>;
    }

    if (Object.keys(link)[0] === 'codepen') {
        return <li className={styles.link}><a href={link.codepen} target='_blank' rel='nofollow'><i className='fa fa-codepen'></i></a></li>;
    }

    if (Object.keys(link)[0] === 'site') {
        return <li className={styles.link}><a href={link.site}><i className='fa fa-link'></i></a></li>;
    }
};


const ProjectList = ({ data }) => (
    <div className={styles.root}>
        {data.map((project, index) => (
            <ProjectItem key={index} project={project} />
        ))}
    </div>
);


export default ProjectList;
