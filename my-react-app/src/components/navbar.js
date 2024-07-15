import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavIconLink,
    NavIconsContainer
} from "./navbarElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/projects" >
                        Projects
                    </NavLink>
                    <NavLink to="/workshop" activeStyle>
                        Workshop
                    </NavLink>
                    <NavLink to="/volunteer" activeStyle>
                        Volunteer
                    </NavLink>
                    <NavLink to="/cca" >
                        CCA
                    </NavLink>
                    <NavLink to="/workExperience" >
                        Work Experience
                    </NavLink>
                    <NavLink to="/others" >
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
        </>
    );
};

export default Navbar;