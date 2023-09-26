import React, {useRef, useEffect} from "react";
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import './header.css';

import logo from '../../assets/images/logo.png'

const nav__link = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about-us',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]

const Header = () => {

    const headerRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', ()=> {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            }else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener('scroll', stickyHeaderFunc);
    }); 

    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    {/* Nav Logo */}
                    <div className="logo">
                        <a href="/home"><img src={logo} alt="Nav Logo" /></a>
                    </div>
                    {/* Menu  */}
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {nav__link.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                                </li>
                            ))} 
                        </ul>
                    </div>
                    {/* Btns */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">
                            <Button id="navBtn" className="btn primary__btn">
                                <Link to='/register'>Sign Up</Link>
                            </Button>
                        </div>
                    </div>

                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </Row>
        </Container>
    </header>
}

export default Header;