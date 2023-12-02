import styled from "styled-components";

export const Main = styled.main`
    display: block;
    flex: 1;
    color: rgb(255, 255, 255);
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 20vh;
`

export const ContainerApp = styled.div`
    background-color: #0A0C10;;
    flex-direction: column;
    min-height: 100vh;
`
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const Form = styled.div`
    display: block;
    margin: 5px;

    input[type=text] 
    {
        border-radius: 10px;
        background: #272B33;
        box-shadow: 0px 0px 3.7px 1px rgba(0, 0, 0, 0.30);
        padding-left: 40px;
        transition: width 0.4s ease-in-out;
        width: 70vh;
        height: 7vh;
        font-size: 16pt;
        color:rgba(123, 121, 121, 0.523);
        outline: none;
        border: none;
    }

    input[type=text]:focus
    {
        width: 90vh;
    }

`

export const Search = styled.div`

    button
    {
        padding: 5px;
        margin: 2vh;
        height: 6vh;
        width: 12vh;
        border-radius: 15px;
        background-color: #272B33;
        font-size: 15pt;
        box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

        :active
        {
            box-shadow: inset -4px 4px 0 #222;
            font-size: 0.9rem;
        }
    }
       
`

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