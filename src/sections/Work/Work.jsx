import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { experience } from "./data";
import { 
    Section,     
    ArrowButton,
    IconButton,
    SecondaryButton,
} from "../../components"
import { typeScale, defaultTheme } from "../../theme";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useSwipeable } from 'react-swipeable'


const StyledWorkItem = styled.div`
    text-align: left;
    margin-left: 10px;
    p {
        color: ${({ theme })=> theme.secondaryTextColor};
    }
    .company {
        color: ${({ theme })=> theme.primaryColor};
        font-size: ${typeScale.header2};
    }

    li  {
        line-height: 30px; 
    }
`

const StyledUl = styled.ul`
    color: ${({ theme }) => theme.secondaryTextColor};
    li {
        font-size: 1.3rem;
    }
`;

const WorkIem = ({
    designation,
    company,
    duration,
    tasks,
    techStack,
    show,
    ...rest
}) => (
    <StyledWorkItem className={show ? 'show' : 'hide'} {...rest}>
        <h2>{designation} <span className="company">@{company}</span></h2>
        <p> FROM {duration.from} - {duration.to}</p>
        <br/>
        <StyledUl>
            {tasks.map(task => (
                <li>
                    {task}
                </li>
            ))}
        </StyledUl>
    </StyledWorkItem>
)


const WorkSectionContainer = styled.div`
    .hide {
        opacity: 0;
        visibility: hidden;
        transition: opacity 300ms ease, visibility 0s ease 300ms;
    }

    .show {
        opacity: 1;
        visibility: visible;
        transition: opacity 300ms ease, visibility 0s ease 300ms;
    }
    .header {
        display: flex;
        width: 100%;
        align-items: baseline;
    }

    .left-btn, .right-btn {
        flex: 1;
        display: none;
        @media screen and (max-width: 768px) {
            display: block;
        }

    }

    .right-btn {
        text-align: right;
    }

    .header-text {
        flex: 2;
        justify-content: center;
    }

    .active {
        background-color: ${defaultTheme.primaryColor};
    }
`;


const WorkSection = ({
    light = false,
    ...rest
}) => {

    const [workIndex, setWorkIndex] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])

    const fadeInNext = (nextIndex) => {
        if (nextIndex >= 0 && nextIndex < experience.length && nextIndex !== workIndex ) {
            setShow(false);
            setTimeout(() => {
                if (nextIndex >= 0 && nextIndex < experience.length && nextIndex !== workIndex ) {
                    setWorkIndex(nextIndex);
                }
                setShow(true);
            }, 200);
        }
       
    }

    const handleArrowClick = (change) => {
        const newIndex = workIndex + change;
        fadeInNext(newIndex);
    }

    const handleCircularClick = (index) => {
        fadeInNext(index);
    }

    const handlers = useSwipeable({
        onSwipedRight: (ev) => handleArrowClick(-1),
        onSwipedLeft: (ev) => handleArrowClick(1),
    });
    
    return (
        <WorkSectionContainer {...handlers} {...rest}>
            <Section light={light} >
                <div className="header">
                    <div className="left-btn">
                        <IconButton  onClick={() => handleArrowClick(-1)} disabled={workIndex === 0}>
                            <FaArrowCircleLeft style={{ fontSize: '1.2em'}}/>
                        </IconButton> 
                    </div>
                    <div className="header-text">
                        <Section.TopLine style={{textAlign: 'center'}}> 
                            Where I’ve Worked
                        </Section.TopLine>
                    </div>
                    <div className=" right-btn">
                        <IconButton onClick={() => handleArrowClick(1)}   disabled={workIndex === experience.length-1}>
                            <FaArrowCircleRight  style={{ fontSize: '1.2em'}}/>
                        </IconButton> 
                    </div>
                </div>
                <br/>
                <Section.Row >
                    <Section.Column col="5" desktopOnly>
                        <ArrowButton
                            onClick={() => handleArrowClick(-1)} 
                            type="LEFT" 
                            disabled={workIndex === 0}
                        />
                    </Section.Column>
                    <Section.Column col="" >
                        <WorkIem {...experience[workIndex]} show={show}/>
                    </Section.Column>
                    <Section.Column col="5" desktopOnly>
                        <ArrowButton 
                            onClick={() => handleArrowClick(1)} 
                            type="RIGHT" 
                            disabled={workIndex === experience.length-1}
                        />
                    </Section.Column>
                </Section.Row>
                <Section.Row style={{justifyContent: 'center'}}>
                    {experience.map((_, index) => (
                        <SecondaryButton 
                            className={index === workIndex ? 'active' : ''}
                            key={index} 
                            modifiers={['circular']}  
                            onClick={() => handleCircularClick(index)}>
                        </SecondaryButton>
                    ))}
                </Section.Row>
            </Section>
        </WorkSectionContainer>
      
    );
};

WorkSection.propTypes = {
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

export { WorkSection  };
