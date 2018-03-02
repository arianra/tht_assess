import styled from 'styled-components';

import FormButton from '../buttons/FormButton.styled.js';

import {
    BUTTON_TEXT,
    BUTTON_TEXT_ACCENT
} from '../../../css-lib/constants/widgetColors.js';
import rotate360 from '../../../css-lib/animations/rotate360.js';


const Spinner = styled.div`
    padding: 6px;
    position: relative;
    text-align;

    &:before {
        content: "";
        height: 16px;
        width: 16px;
        margin: -15px auto auto -15px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-width: 8px;
        border-style: solid;
        border-color: ${BUTTON_TEXT} transparent ${BUTTON_TEXT};
        border-radius: 100%;
        animation: ${rotate360} 1s infinite ease-in-out;
    }
    ${FormButton}:hover &:before {
        border-color: ${BUTTON_TEXT_ACCENT} transparent ${BUTTON_TEXT_ACCENT};
    }
`;

export default Spinner;