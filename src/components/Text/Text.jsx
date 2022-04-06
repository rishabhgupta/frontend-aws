import styled from 'styled-components';
import { typeScale } from "../../theme";

const TextWrapper = styled.div`
    padding-top: 0;
`;

const TopLine = styled.p`
    color: ${({ theme }) => theme.primaryColor};
    font-size: ${typeScale.header4};
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-transform: uppercase;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: ${typeScale.header1};
    line-height: 1.1;
    color: ${({ theme }) => theme.textColor};
`;

const Subtitle = styled.p`
    margin-bottom: 35px;
    font-size: ${typeScale.header3};
    color: ${({ theme }) => theme.secondaryTextColor};
`;

const Content = styled.p`
    margin-bottom: 35px;
    font-size: ${typeScale.header4};
    color: ${({ theme }) => theme.secondaryTextColor};
`

export { TextWrapper, TopLine, Heading, Subtitle, Content}