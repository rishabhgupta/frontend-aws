import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Fade, Flip} from 'react-reveal';
import { 
    SecondaryButton, 
    Section, 
    TextWrapper,
    Img, 
    ImgWrapper
} from "../../components"


const LinkWrapper = styled.div`
    display: block;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const LinkWrapperRev = styled.div`
    display: none;
    margin-top: 50px;
    @media screen and (max-width: 768px) {
        display: block;
    }
`


const HeroSection = ({
    light = false, 
    ...rest
}) => {

    return (
        <Section light={light} {...rest}>
            <Section.Row >
                <Section.Column type={2}> 
                    <TextWrapper>
                        <Section.TopLine>
                            hi, i am john doe
                        </Section.TopLine>
                        <Section.Heading>
                            I like to create scalable frontend products with great user experiences.
                        </Section.Heading>
                        <Section.Subtitle>
                            Full Stack Web Developer. UX Designer. Content Creator  
                        </Section.Subtitle>
                        <LinkWrapper>
                            <SecondaryButton onClick={() => window.location = 'mailto:johndoe@gmail.com'}>
                                Contact Me
                            </SecondaryButton>
                        </LinkWrapper>
                    </TextWrapper>
                    
                </Section.Column>
                <Section.Column  type={2}> 
                    <ImgWrapper>
                        <Fade delay={500}>
                            <Img src="/images/hero.svg" alt="hero image"/>
                        </Fade>
                    </ImgWrapper>
                </Section.Column>
            </Section.Row>
            <LinkWrapperRev>
                <SecondaryButton >
                    Contact Me
                </SecondaryButton>
            </LinkWrapperRev>
        </Section>
    );
};

HeroSection.propTypes = {
    lightBg: PropTypes.bool,
    imgStart: PropTypes.bool,
    topLine: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    primary: PropTypes.bool,
    lightTopLine: PropTypes.bool,
    lightHeading: PropTypes.bool,
    lightDesc: PropTypes.bool,
    img: PropTypes.string,
    alt: PropTypes.string,
    start: PropTypes.bool
};

export { HeroSection  };
