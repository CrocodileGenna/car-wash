import styled from '@emotion/styled';

export const GlobalStyle = styled.div`
  width: 100%;
  height: 100vh;
  // outline: 1px solid;

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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: #fff;
  background-color: #343434;
  z-index: 9999;
`;

export const UP_DIV = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  width: 100%;
`;

export const NAV_UL = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  box-shadow: 0px -3px 3px -2px rgb(255 255 255);
  // color: #fff;

  li {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 20px;
    button {
      display: flex;
      border: none;
      padding: 5px 5px;
      height: 100%;
      color: #fff;
      background-color: #343434;
      transition: all 0.4s ease 0s;

      :hover,
      :focus {
        color: #343434;
        background-color: #fff;
      }
    }
    // span {
    //   width: 0;
    //   height: 0;
    //   border-top: 10px solid #fff;
    //   border-left: 10px solid transparent;
    //   border-right: 10px solid transparent;
    // }
    div {
      display: none;
      position: absolute;
      top: 100%;
      left: 0px;
      z-index: 1;
      p {
        font-size: 12px;
        padding: 1px 0;
        margin: 3px 0;
        border-bottom: 1px solid #ffffff57;
      }
    }
    :hover {
      border: none;
    }
    :hover div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #343434;
    }
  }
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

// SECTION
export const SECTION = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0 0;
`;
export const INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

export const INFRAME = styled.iframe`
  display: flex;
  border-radius: 10px;
  border: 1px solid;
  margin: 20px 0;
  width: 300px;
  height: 300px;
`;

export const MAP_IMG = styled.img`
  display: flex;
  border-radius: 5px;
  padding: 1px;
  margin: 5px 0;
  width: 100px;
  background-color: black;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    // width: 200px;
    padding: 0.5px;
    transform: scale(2.4);
  }
`;
// FOOTER
export const FOOTER = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -10px 5px -5px rgba(0, 0, 0, 0.1);
`;
