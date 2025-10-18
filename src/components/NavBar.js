import { Navbar, Nav, Container } from 'react-bootstrap';
import '../data/Navbar.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const [navbarClass, setNavbarClass] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                setNavbarClass('scrolled');
            } else {
                setScrolled(false);
                setNavbarClass('');
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setNavbarClass('scrolled');
        } else {
            setNavbarClass('');
        }
    };




    return (
        <Router>
            {/* <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> */}
            <Navbar expand="lg" className={navbarClass}>
                <Container>
                    <Navbar.Brand href="#home" className=""></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#experience" className={activeLink == 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                            <Nav.Link href="#education" className={activeLink == 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>

                            {/* <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
                            {/* <Nav.Link href="#blogs" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blogs')}>Blogs</Nav.Link> */}
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>ContactMe</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container> 
            </Navbar>
        </Router>

    );
}
