import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from './Header/Header.js';
import styles from './index.module.sass';


const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title='Doan Thieu'
                meta={[
                    {
                        name: 'description',
                        content: 'Doan Thieu - A self-taught Web Developer based in Vietnam'
                    }]}
                link={[
                    {
                        media: 'all',
                        rel: 'stylesheet',
                        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
                    }]}
        />
        <Header />
        <div>
            { children() }
        </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};


export default TemplateWrapper;
