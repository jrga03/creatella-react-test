import styled from 'styled-components';

const ListWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 8px;;
    padding: 0;

    .products-appear {
        opacity: 0;
        transform: scale( 0 );
    }

    .products-appear-active {
        opacity: 1;
        transform: scale( 1 );
        transition: opacity 500ms, transform 200ms;
    }

    .products-leave {
        opacity: 1;
    }

    .products-leave-active {
        opacity: 0;
        transition: opacity 500ms;
    }
`;

export default ListWrapper;