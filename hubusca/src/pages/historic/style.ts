// style.ts
import styled from "styled-components";

export const nav = styled.nav`
  color: white;
  padding: 1%;
`

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    height: 100%;
    margin-top: 40px;
`;

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000d24;
    justify-content: space-between; 
`;

export const Footer = styled.footer`
    padding: 6vh;
    display: flex;
    font-size: 12pt;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #D9DEE3;
    background-color: #000d24;
`
