import styled from 'styled-components';

import FormFieldBase from './FormField.js';
import FormWidget from '../FormWidget/FormWidget.styled.js';

import { SHADOW_GREY } from '../../../css-lib/constants/widgetColors.js';

const HORIZONTAL_PADDING = 20;

const FormField = styled(FormFieldBase)`
    width: calc(100% - ${HORIZONTAL_PADDING*2}px);
    padding: 16px ${HORIZONTAL_PADDING}px;

    border: none;
    border-radius: 4px;
    box-shadow: inset 0px 1px 2px 1px ${SHADOW_GREY};

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    ${FormWidget} & {
        font-size: .8rem;
    }
`;

export default FormField;