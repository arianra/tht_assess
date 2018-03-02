import { keyframes } from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(359deg);
    }
`;

export default rotate360;