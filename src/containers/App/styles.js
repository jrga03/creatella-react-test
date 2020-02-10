import styled from 'styled-components';

export const Container = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 58px;
    padding-bottom: 8px;
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
