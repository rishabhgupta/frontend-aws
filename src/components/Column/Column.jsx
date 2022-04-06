import styled from 'styled-components';

const TYPES = {
    1: 100,
    2: 75,
    3: 50,
    4: 25,
    5: 10,
}

const Column = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: ${({ col }) => (TYPES[col])}%;
    flex-basis: ${({ col }) => (TYPES[col])}%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: ${({ desktopOnly }) => desktopOnly ? 'none' : 'flex'};
        justify-content: center;
    }
`;

export { Column }