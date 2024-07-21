import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavIconLink,
    NavIconsContainer,
    MobileMenu
} from "./navbarElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <Nav>
                <Bars onClick={toggleMobileMenu} />
                <NavMenu>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/workshop" activeStyle>
                        Workshop
                    </NavLink>
                    <NavLink to="/volunteer" activeStyle>
                        Volunteer
                    </NavLink>
                    <NavLink to="/cca">
                        CCA
                    </NavLink>
                    <NavLink to="/workExperience">
                        Work Experience
                    </NavLink>
                    <NavLink to="/others">
                        Others
                    </NavLink>
                </NavMenu>
                <NavIconsContainer>
                    <NavIconLink href="https://github.com/TrinaLim" target="_blank">
                        <FaGithub />
                    </NavIconLink>
                    <NavIconLink href="https://www.linkedin.com/in/trinalim132/" target="_blank">
                        <FaLinkedin />
                    </NavIconLink>
                </NavIconsContainer>
            </Nav>
            {isMobileMenuOpen && (
                <MobileMenu>
                    <NavLink to="/home" onClick={toggleMobileMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" onClick={toggleMobileMenu}>
                        Projects
                    </NavLink>
                    <NavLink to="/workshop" activeStyle onClick={toggleMobileMenu}>
                        Workshop
                    </NavLink>
                    <NavLink to="/volunteer" activeStyle onClick={toggleMobileMenu}>
                        Volunteer
                    </NavLink>
                    <NavLink to="/cca" onClick={toggleMobileMenu}>
                        CCA
                    </NavLink>
                    <NavLink to="/workExperience" onClick={toggleMobileMenu}>
                        Work Experience
                    </NavLink>
                    <NavLink to="/others" onClick={toggleMobileMenu}>
                        Others
                    </NavLink>
                    <NavIconLink href="https://github.com/TrinaLim" target="_blank" onClick={toggleMobileMenu}>
                        <FaGithub />
                    </NavIconLink>
                    <NavIconLink href="https://www.linkedin.com/in/trinalim132/" target="_blank" onClick={toggleMobileMenu}>
                        <FaLinkedin />
                    </NavIconLink>
                </MobileMenu>
            )}
        </>
    );
};

export default Navbar;
