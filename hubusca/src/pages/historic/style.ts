// style.ts
import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap; /* Allow flex items to wrap to the next line */
    justify-content: center;
    color: white;
`;

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column; /* Stack children vertically */
    min-height: 100vh;
    background-color: #0A0C10;
    padding: 20px; /* Add padding for spacing */
`;
