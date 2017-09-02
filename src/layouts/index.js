import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './index.module.sass';
import theme from '../shared/prism.css';


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
        <div>
            { children() }
        </div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};


export default TemplateWrapper;
