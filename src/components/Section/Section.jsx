import React from 'react'
import styled from "styled-components";
import { Row, Column } from '../'
import { Heading, TopLine, Subtitle, Content } from '../Text/Text';
    
const SectionWrapper = styled.div`
    transition: all 0.2s ease-out;
    z-index: 1;
    width: 100%;
    background: ${({ light, theme }) => (light ? theme.infoSectionLight : theme.infoSectionDark)};
    height: ${({ hero }) => (hero ?  'calc(100vh - 80px);' : 'auto;')};
`;

const Container = styled.div`
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 160px 50px;

    @media screen and (max-width: 991px) {
        padding: 100px 30px;
    }
`



const Section = ({ children, ...restProps }) => {
    return (
        <SectionWrapper {...restProps}>
            <Container>
                {children}
            </Container>
        </SectionWrapper>
    )
}

Section.Row = ({ children, ...restProps}) => {
    return (
        <Row {...restProps}>
            {children}
        </Row>
    )
}

Section.Column = ({ children, type, ...restProps}) => {
    return (
        <Column type={type} {...restProps}>
            {children}
        </Column>
    )
}

Section.TopLine = ({ children, ...restProps}) => {
    return (
        <TopLine {...restProps}>
            {children}
        </TopLine>
    )
}

Section.Heading = ({ children, ...restProps}) => {
    return (
        <Heading {...restProps}>
            {children}
        </Heading>
    )
}

Section.Subtitle = ({ children, ...restProps}) => {
    return (
        <Subtitle {...restProps}>
            {children}
        </Subtitle>
    )
}

Section.Content = ({ children, ...restProps}) => {
    return (
        <Content {...restProps}>
            {children}
        </Content>
    )
}

export {Section}