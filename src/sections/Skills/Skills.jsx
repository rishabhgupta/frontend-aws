import React from "react";
import styled, { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { 
    Section, 
    TextWrapper,
} from "../../components"
import { Fade } from "react-reveal";


const Arrow = styled(FaAngleRight)`
    margin-right: 0.5em;
`;

const SkillsSection = ({
    lightBg = false,
    ...rest
}) => {
    const theme = useContext(ThemeContext);

    return (
        <Section light={lightBg} {...rest}>
            <Section.Row>
                <Section.Column col={3}>
                    <TextWrapper>
                        <Section.TopLine>
                            MY SKILL SET
                        </Section.TopLine>
                        <Section.Heading>
                            My expertise and interest primarily lie in  
                        </Section.Heading>
                        <Section.Subtitle>
                            JavaScript, ReactJs, Angular, Vue, Python, MongoDB and AWS.
                        </Section.Subtitle>
                        <Section.Content>
                            Here are a few technologies I’ve been working with recently.
                        </Section.Content>
                    </TextWrapper>
                </Section.Column>
                <Section.Column col={4} >
                    <Fade>
                        <p><Arrow color={theme.primaryColor}/> Javascript </p>
                        <p><Arrow color={theme.primaryColor}/> React </p>
                        <p><Arrow color={theme.primaryColor}/> Node.js </p>
                        <p><Arrow color={theme.primaryColor}/> Typescript </p>
                        <p><Arrow color={theme.primaryColor}/> Angular </p>
                        <p><Arrow color={theme.primaryColor}/> Webpack </p>
                    </Fade>
                </Section.Column>
                <Section.Column col={4}>
                    <Fade delay={500} >
                        <p><Arrow color={theme.primaryColor}/> Python </p>
                        <p><Arrow color={theme.primaryColor}/> MongoDB </p>
                        <p><Arrow color={theme.primaryColor}/> DynamoDB </p>
                        <p><Arrow color={theme.primaryColor}/> Microfrontends </p>
                        <p><Arrow color={theme.primaryColor}/> AWS </p>
                        </Fade>
                </Section.Column>
            </Section.Row>
        </Section>
    );
};

SkillsSection.propTypes = {
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

export { SkillsSection };