import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`
export const Content = styled.section`
    padding: 50px 20px;
    @media screen and (max-width: 768px){
      padding: 20px 20px 80px;
    }
`;