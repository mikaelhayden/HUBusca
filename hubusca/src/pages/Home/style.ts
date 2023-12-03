import styled from "styled-components";


export const nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding: 1%;
    p{
        padding-left: 20px;
    }
`

export const logo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1, p
    {
        color: white;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: rgb(255, 255, 255);
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;

`

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between; /* Distributes space evenly, placing the footer at the bottom */
    background-color: #000d24;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const Form = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    input[type=text] {
        border-radius: 10px;
        background: #131518;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.90);
        padding: 10px;
        transition: width 0.6s ease-in-out;
        width: 40%;
        max-width: 100%;
        height: 8vh;
        font-size: 13pt;
        color: white;
        outline: none;
        margin-bottom: 10px; /* Add margin-bottom for spacing */
    }

    input[type=text]:focus {
        width: 50%;
    }

    h1 {
        font-size: 20pt;
        margin-bottom: 15px; /* Increase margin-bottom for spacing */
    }
`;

export const Search = styled.div`
    button {
        margin-top: 10px; /* Add margin-top for spacing */
        padding: 10px;
        height: 7vh;
        max-width: 150px;
        border-radius: 15px;
        background-color: #131518;
        font-size: 15pt;
        box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
        color: white;

        :active {
            box-shadow: inset -4px 4px 0 #222;
            font-size: 0.9rem;
        }
    }
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