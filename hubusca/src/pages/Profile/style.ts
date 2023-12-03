import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: rgb(255, 255, 255);
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`
export const imagem = styled.img`
    width: 50%;
    height: 50%;
`

export const ContainerApp = styled.div`
    background-color: #0A0C10;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px; /* Espaçamento entre os parágrafos */
  justify-content: space-around;

  @media (max-width: 768px) {
    /* Ajuste para telas menores (por exemplo, tablets) */
    flex-direction: column;
    align-items: center;
  }
`;


export const Footer = styled.footer`
    padding: 6vh;
    display: flex;
    font-size: 12pt;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px;
    color: #D9DEE3;
    background-color: #0A0C10;;
`

