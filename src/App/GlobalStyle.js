import { createGlobalStyle } from "styled-components";
import background from "../cantorBackground.png";

export const GlobalStyle = createGlobalStyle`
#root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: "Lato", sans-serif;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
}
`;
