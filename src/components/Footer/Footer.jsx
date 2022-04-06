import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { IconButton } from "../Button/IconButton";

const FooterContainer = styled.div`
    background-color: ${({theme}) => theme.infoSectionLight};
    padding: 1.5rem 0 1rem 0;

    .container {
        display: flex;
        max-width: 1300px;
        margin: 0 auto;
        padding: 10px 50px;
        flex-direction: row;
        align-items: center;

        @media screen and (max-width: 820px) {
            flex-direction: column;
        }
    }

    .copyright-container {
        flex: 1;
    }

    .social-container {
        flex: 1;
        text-align: right;
        font-size: 16px;
    }
`;

const WebsiteRights = styled.small`
    color: ${({theme}) => theme.textColor};
    margin-bottom: 16px;
`;



const Footer = () => {
    return (
        <FooterContainer>
            <div className="container">
                <div className="copyright-container">
                    <WebsiteRights>John Doe © 2022.</WebsiteRights>
                </div>
                <div className="social-container">
                        <IconButton modifiers={['large']} >
                            <FaGithub/>
                        </IconButton>
                        <IconButton modifiers={['large']}>
                            <FaLinkedinIn/>
                        </IconButton>
                        <IconButton modifiers={['large']}>
                            <FaTwitter/>
                        </IconButton>
                        <IconButton modifiers={['large']}>
                            <FaInstagram/>
                        </IconButton>
                        <IconButton modifiers={['large']}>
                            <FaFacebook/>
                        </IconButton>
                </div>
            </div>
        </FooterContainer>
    );
};

export { Footer };
