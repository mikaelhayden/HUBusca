import { styled } from "styled-components";

export const nav = styled.nav`
  display: flex;
  color: white;
  padding: 1%;
`;
export const Main = styled.main`
    padding-top: 2%;
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
    
    background-color: #000d24;
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

export const RepoRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow-y: hidden;
  align-items: center;
  justify-content: center;

  h3{
    color: white;
  }
`;

export const RepoListRoot = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
	overflow-y: auto;
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
    background-color: #000d24;
`

