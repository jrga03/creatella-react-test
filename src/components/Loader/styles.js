import styled, { keyframes } from 'styled-components';

const ellipsis = keyframes`
    to {
        width: 1.25em;
    }
`;

const Wrapper = styled.div`
    font-size: 30px;
    padding: 8px;

    &:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        -webkit-animation: ellipsis steps( 4, end ) 500ms infinite;
        animation: ${ellipsis} steps( 4, end ) 500ms infinite;
        content: "\2026"; /* ellipsis character */
        width: 0px;
    }
`;

export default Wrapper;
