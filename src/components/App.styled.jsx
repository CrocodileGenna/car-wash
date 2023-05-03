import styled from '@emotion/styled';

export const GlobalStyle = styled.div`
  width: 100%;
  height: 100vh;
  outline: 1px solid;

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;
// HEADER
export const HEADER = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a9a8a88c;
  padding: 10px;
`;

export const LOGO = styled.img`
  width: 70px;
  color: red;
  background-color: #fff00;

  @media screen and (min-width: 480px) {
    width: 95px;
  }
  @media screen and (min-width: 760px) {
    width: 140px;
  }
  @media screen and (min-width: 1200px) {
    width: 175px;
  }
`;

export const TITLE_DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// SECTION
export const SECTION = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid;
  padding: 10px;
  margin: 20px 0;
  background-color: #d7d7d7;
  span {
    color: green;
  }
`;

export const INFRAME = styled.iframe`
  display: flex;
  border-radius: 10px;
  border: 1px solid;
  margin: 20px 0;
`;

// FOOTER
export const FOOTER = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -10px 5px -5px rgba(0, 0, 0, 0.1);
`;
