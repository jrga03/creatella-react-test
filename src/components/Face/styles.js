import styled from 'styled-components';

const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 150px;
    min-width: 150px;
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba( 0, 0, 0, 0.4 );
    border-radius: 4px;

    &:hover {
        background-color: rgba( 0, 0, 0, 0.1 );
        border-width: 2px;
    }

    .face {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        font-size: ${({size}) => `${size}px`};
    }

    .price {
        width: 100%;
        text-align: start;
        font-weight: 600;
        font-size: 18px;
    }

    .date-added {
        width: 100%;
        text-align: right;
        font-size: 12px;
        font-style: italic;
        color: #949494;
    }
`;

export default StyledLi;