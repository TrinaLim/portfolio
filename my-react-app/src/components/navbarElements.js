import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    z-index: 12;
    background: #3D52A0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
    color: #d8d8d8;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #d4faf9;
    }
    font-family: "Lucida Handwriting", 'Times New Roman', serif;
`;

export const NavIconLink = styled.a`
    color: #d8d8d8;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.8rem;
    &:hover {
        color: #aadff0;
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

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 85px;
    width: 100%;
    background: #3D52A0;
    padding: 1rem;
    @media screen and (min-width: 769px) {
        display: none;
    }
`;
