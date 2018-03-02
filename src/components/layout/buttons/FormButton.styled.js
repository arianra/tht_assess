import styled from 'styled-components';

import FormButtonBase from './FormButton.js';
import FormWidget from '../FormWidget/FormWidget.styled.js';

import {     
    BUTTON_BG,
    BUTTON_BG_ACCENT,
    BUTTON_TEXT,
    BUTTON_TEXT_ACCENT
} from '../../../css-lib/constants/widgetColors.js';

const FormButton = styled(FormButtonBase)`
    width:100%;
    padding: 16px 20px;

    border-radius: 4px;
    border: none;

    cursor: pointer;
    background-color: ${BUTTON_BG};
    color: ${BUTTON_TEXT};
    &:hover {
        background-color: ${BUTTON_BG_ACCENT};
        color: ${BUTTON_TEXT_ACCENT};
    }

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    ${FormWidget} & {
        font-size: .8rem;
    }
`;

export default FormButton;