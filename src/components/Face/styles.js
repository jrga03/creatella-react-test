import styled from 'styled-components';

const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 200px;
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba( 0, 0, 0, 0.4 );
    border-radius: 4px;

    &:hover {
        background-color: rgba( 0, 0, 0, 0.2 );
    }

    .face {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        font-size: ${({size}) => `${size}px`};
    }
`;

export default StyledLi;