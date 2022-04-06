import React, { useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { Container, typeScale } from "../../theme";
import { PrimaryButton } from "../Button/Button";
import { IconButton } from "../Button/IconButton";
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useContext } from "react";
import { useScrollSection } from 'react-scroll-section';
import { Fade } from "react-reveal";


const Nav = styled.nav`
    transition: all 0.2s ease-out;
    background: ${({theme}) => theme.infoSectionLight};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

const NavLogo = styled.p`
    transition: all 0.2s ease-out;
    color: ${({theme}) => theme.textColor};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: ${typeScale.header2};
    display: flex;
    align-items: center;
`;

const NavIcon = styled(FaCode)`
    margin-right: 0.5em;
    font-size: ${typeScale.header2};
`;

const DarkThemeIcon = styled(FaMoon)`
    cursor: pointer;
`;

const LightThemeIcon = styled(FaSun)`
    cursor: pointer;
`;

const MenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: inherit;
        top: 0;
        right: 0; 
        transform: translate(-30%, 60%);
        position: absolute;
    }
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${({theme}) => theme.navbarColor};
    }
`;

const NavItem = styled.li`
    height: 80px;
    border-bottom: ${({ selected }) => selected ? '2px solid #1E9E80' : '2px solid transparent'};
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #1E9E80;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;           
        }
    }
`;

const NavLink = styled.p`
    transition: all 0.2s ease-out;
    color: ${({theme}) => theme.textColor};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: ${typeScale.header5};

    &:hover {
        color: ${({theme}) => theme.primaryColor};
    }

    &:active {
        color: ${({theme}) => theme.primaryColorActive}
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`;

const Navbar = ({ setTheme }) => {
    const theme = useContext(ThemeContext);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');
    const skillSection = useScrollSection('skills');
    const workSection = useScrollSection('work');

    useEffect(() => {
        showButton();
    }, []);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    const renderThemeButton = () => {
        if (theme.mode === "dark") {
            return (
                <IconButton onClick={() => setTheme('light')}>
                    <FaSun/>
                </IconButton>
            );
        } else {
            return (
                <IconButton onClick={() => setTheme('dark')}>
                    <FaMoon/>
                </IconButton>
            );
        }
    }

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav theme={theme}>
                    <NavbarContainer>
                        <NavLogo onClick={homeSection.onClick} selected={homeSection.selected}>
                            <NavIcon color="#1E9E80" />
                            John Doe
                        </NavLogo>
                        <MenuIcon >
                            <IconButton onClick={handleClick}>
                                {click ? <FaTimes /> : <FaBars />}
                            </IconButton>
                            {renderThemeButton()}
                        </MenuIcon>
                        <Fade>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem onClick={aboutSection.onClick} selected={aboutSection.selected}>
                                <NavLink>About</NavLink>
                            </NavItem>
                            <NavItem onClick={skillSection.onClick} selected={skillSection.selected}>
                                <NavLink>Skills</NavLink>
                            </NavItem>
                            <NavItem onClick={workSection.onClick} selected={workSection.selected}>
                                <NavLink >Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Blog</NavLink>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink>
                                        <PrimaryButton>Resume</PrimaryButton>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink>
                                        <PrimaryButton>
                                            Resume
                                        </PrimaryButton>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                            <NavBtnLink>
                                {renderThemeButton()}
                            </NavBtnLink>
                        </NavMenu>
                        </Fade>
                        
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </React.Fragment>
    );
};

export { Navbar };
