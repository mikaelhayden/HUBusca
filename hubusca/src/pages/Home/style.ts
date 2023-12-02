import styled from "styled-components";

export const nav = styled.nav`
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
    background-color: #0A0C10;
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
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: #272B33; */
    padding: 20px; /* Increase padding for spacing */

    input[type=text] {
        border-radius: 10px;
        background: #272B33;
        box-shadow: 0px 0px 3.7px 1px rgba(0, 0, 0, 0.30);
        padding: 10px;
        transition: width 0.4s ease-in-out;
        width: 100%;
        max-width: 400px;
        height: 8vh;
        font-size: 14pt;
        color: rgba(123, 121, 121, 0.523);
        outline: none;
        border: none;
        margin-bottom: 10px; /* Add margin-bottom for spacing */
    }

    input[type=text]:focus {
        width: 100%;
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
        background-color: #272B33;
        font-size: 15pt;
        box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

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
    background-color: #0A0C10;;
`