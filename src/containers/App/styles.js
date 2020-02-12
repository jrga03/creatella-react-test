import styled from 'styled-components';

export const Container = styled.main`
    height: calc( 100vh - 66px ); /* subtract padding top and bottom */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    padding-top: 58px;

    .loading-appear {
        opacity: 0;
    }

    .loading-appear-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .loading-exit {
        opacity: 1;
    }
    .loading-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #eaeaea;
    position: fixed;
    z-index: 10;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LoadingWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Footer = styled.footer`
    font-size: 30px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
`;
