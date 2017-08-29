import React from 'react';
import styles from './PageContent.module.sass';


const PageContentWrapper = ({ children }) => (
    <div>
        <div className={styles.inner}>
            {children}
        </div>
    </div>
);


export const PageContentItem = ({ children }) => (
    <div className={styles.contentItem}>
        {children}
    </div>
);


export const PageContentSub = ({ children }) => (
    <div className={styles.contentSub}>
        {children}
    </div>
);


export const PageContentMain = ({ children }) => (
    <div className={styles.contentMain}>
        {children}
    </div>
);


export const PageContentBlock = ({ children }) => (
    <div className={styles.contentBlock}>
        {children}
    </div>
);


export default PageContentWrapper;
