import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body{
    background: #131415;
    color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
`;

export default GlobalStyled;
