import styled from "styled-components";
import { defaultTheme } from "../../theme/themes";

const TYPES = {
    TOP: 225,
    LEFT: 135,
    RIGHT: 315,
    DOWN: 90
}

const getDegree = (type) => {
    return `rotate(${TYPES[type]}deg);`
}

const ArrowButton = styled.button`
    content: '';
    border: solid ${({theme}) => theme.primaryColor};
    border-width: 0 8px 8px 0;
    display: inline-block;
    padding: 14px;
    background: none;
    transform: ${({type}) => getDegree(type)};
    -webkit-transform: ${({type}) => getDegree(type)};

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        border: solid ${defaultTheme.textDisabled};
        border-width: 0 8px 8px 0;
        opacity: .5;
        cursor: not-allowed;
    }

`

export { ArrowButton }