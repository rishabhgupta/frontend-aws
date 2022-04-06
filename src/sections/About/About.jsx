import React from "react";
import PropTypes from "prop-types";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import { 
    Section, 
    TextWrapper,
    Img, 
} from "../../components"

const ProfileImage = styled(Img)`
    max-width: 250px;
`

const AboutSection = ({
    light = false,
    ...rest
}) => {
    return (
        <Section light={light} {...rest}>
                <Section.TopLine style={{textAlign: 'center'}}> 
                    ABOUT ME
                </Section.TopLine>
                <Section.Row>
                    <Section.Column col={4}>
                        <Fade>
                            <ProfileImage src="/images/about2.svg" alt="about me"/>
                        </Fade>
                    </Section.Column>
                    <Section.Column col={2}>
                        <TextWrapper>
                            <Section.Content>
                                Hello! My name is John Doe and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                            </Section.Content>
                            <Section.Content>
                                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                            </Section.Content>
                        </TextWrapper>
                    </Section.Column>
                </Section.Row>
        </Section>
    );
};

AboutSection.propTypes = {
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

export {AboutSection};
