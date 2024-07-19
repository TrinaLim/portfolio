import { FaBars } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";

const colorChange = keyframes`
    0% { background-color: #F0C6FB; }
    25% { background-color: #F9EF4F; }
    50% { background-color: #A9F2A6; }
    75% { background-color: #A6F0F2; }
    100% { background-color: #C3A6F2; }
`;
export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: flex;
    align-items: center;
    padding: 0 1rem;
    z-index: 12;
    animation: ${colorChange} 5s infinite;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    };
    font-family: "Lucida Handwriting", 'Times New Roman', serif;
`;
export const NavIconLink = styled.a`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.8rem;
    &:hover {
        color: #808080;
    }
`;
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* Adjust the margin to align the items properly */
    margin-right: auto;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavIconsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
`;
