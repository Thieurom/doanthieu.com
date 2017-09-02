import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header/Header';
import Hero, { HeroText } from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';


const IndexPage = () => (
    <div>
        <Header />
        <Hero>
            <h1>Hi! I'm Doan Thieu</h1>
            <HeroText>
                <p>I'm a self-taught Web Developer based in Hanoi, Vietnam.</p>
                <p>I'm interested in both front-end and back-end web development. I can write HTML, CSS, JavaScript, Ruby and use Sass, React, Express, MongoDB, Ruby on Rails, PostgreSQL.</p>
                <p>More about me, let's see what I <Link to='/learn'>learn</Link>, <Link to='/create'>create</Link>, <Link to='/reflect'>reflect</Link>.</p>
            </HeroText>
        </Hero>
        <Footer />
    </div>
);


export default IndexPage
