import React, { Component } from 'react';
import Link from 'gatsby-link';
import Logo from '../Logo/Logo';
import styles from './Header.module.sass';


class Nav extends Component {

    constructor(props) {
        super(props);

        this.onMatch = this.onMatch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onMatch() {
        this.checkbox.checked = false;
    }

    onChange(event) {
        const target = event.target;

        if (target.checked) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    }

    componentWillMount() {
        this.mediaQueryList = window.matchMedia('(min-width: 580px)');
        this.mediaQueryList.addListener(this.onMatch);
    }

    componentWillUnmount() {
        this.mediaQueryList.removeListener(this.onMatch);
    }

    render() {
        return (
            <nav className={styles.nav}>
                <input type='checkbox'
                       id='toggle'
                       className={styles.toggleState}
                       defaultChecked={false}
                       onChange={this.onChange}
                       ref={input => { this.checkbox = input; }}/>
                <label htmlFor='toggle' className={styles.menu}>
                    <span className={styles.menuBread}></span>
                    <span className={styles.menuBread}></span>
                    <span className={styles.menuBread}></span>
                    <span className={styles.menuBread}></span>
                </label>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link to='/learn' className={styles.link}>Learn</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to='/create' className={styles.link}>Create</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to='/reflect' className={styles.link}>Reflect</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


const Header = () => (
    <header>
        <div className={styles.inner}>
            <div className={styles.content}>
                <Logo />
                <Nav />
            </div>
        </div>
    </header>
);


export default Header;
