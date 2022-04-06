import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers} from "styled-components-modifiers"    
import { SecondaryButton } from './Button';
import { defaultTheme } from "../../theme/themes";
import { typeScale } from "./../../theme/typography";

const ICON_BUTTON_MODIFIERS = {
    large: () => `
        .icon-btn {
            font-size: ${typeScale.header4};
        }
    `
}
const IconButtonStyle = styled(SecondaryButton)`
        background: none;
        border: none;
        padding: 9px 2px 0px 2px;
        margin: 0px 0.5rem;

        &:hover {   
            background: none;
        }

        .icon-btn {
            transition: all 0.2s ease-out;
            color: ${({ theme }) => theme.textColor} !important;
        }

        .icon-btn:hover {
            color: ${defaultTheme.primaryColorHover} !important;
        }

        .icon-btn-disabled {
            color: ${defaultTheme.disabled} !important;
            pointer-events: none;
            touch-action: none;
            cursor: not-allowed;
        }
        ${applyStyleModifiers(ICON_BUTTON_MODIFIERS)}
`

const IconButton = ({ children, disabled, ...rest }) => {
    const iconClassName = disabled ? 'icon-btn icon-btn-disabled' : 'icon-btn';
    return (
        <IconButtonStyle {...rest}>
            {React.Children.map(children, (child) => (
                React.cloneElement(child, {className: iconClassName})
            ))}
        </IconButtonStyle>
    )
}

export { IconButton }