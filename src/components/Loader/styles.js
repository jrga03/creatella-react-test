import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% {
        opacity: .1;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: .1;
    }
`;

const Wrapper = styled.div`
    font-size: 30px;
    padding: 8px;

    .dot {
        animation-name: ${blink};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    .two {
        animation-delay: 0.2s;
    }

    .three {
        animation-delay: 0.4s;
    }
`;

export default Wrapper;
