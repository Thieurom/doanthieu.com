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
                <p>I'm a self-taught Software Developer based in Hanoi, Vietnam.</p>
                <p>I'm interested in front-end and back-end web development as well as native app development. Currently into JavaScript, Ruby and Swift.</p>
                <p>More about me, let's see what I <Link to='/learn'>learn</Link>, <Link to='/create'>create</Link>, <Link to='/reflect'>reflect</Link>.</p>
            </HeroText>
        </Hero>
        <Footer />
    </div>
);


export default IndexPage
