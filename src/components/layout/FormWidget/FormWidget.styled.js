import styled from 'styled-components';

import {     
    BG,
    BORDER_GREY
} from '../../../css-lib/constants/widgetColors.js';

const FormWidget = styled.section`
    background-color: ${BG};
    border: 1px solid ${BORDER_GREY};
`;

export default FormWidget;

export const FormWidgetRow = styled.div`
    padding: 25px;

    & ~ & {
        border-top: 1px solid ${BORDER_GREY};
    }

    &.header {
        padding: 4px 32px;

        /* this should be part of h2 styled component */
        h1 {
            font-weight: 300;
            font-size: 1.2rem;
        }
    }
`;