import React from 'react';
import Link from 'gatsby-link';
import { logo } from './Logo.module.sass';


const Logo = () => (
    <Link to='/' className={logo} />
);


export default Logo;
