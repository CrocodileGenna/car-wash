import styled from '@emotion/styled';
import fon from './images/fon_ing_header.jpg';

export const HEADER = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-image: url(${fon});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 460px) {
    height: 220px;
  }
  @media screen and (min-width: 760px) {
    height: 240px;
  }
  @media screen and (min-width: 1200px) {
    height: 260px;
  }
`;
export const TITLE_DIV = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: #000000a6;
  @media screen and (min-width: 460px) {
    width: 400px;
  }
  @media screen and (min-width: 760px) {
    width: 600px;
  }
  @media screen and (min-width: 1200px) {
    width: 800px;
  }
`;
export const TITLE_INFO_DIV = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto 0px;
  @media screen and (min-width: 460px) {
    margin: auto 60px;
  }
  @media screen and (min-width: 760px) {
    margin: auto 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const LOGO = styled.img`
  display: flex;
  margin: 0;
  width: 120px;
  @media screen and (min-width: 460px) {
    width: 130px;
  }
  @media screen and (min-width: 760px) {
    // display: none;
    width: 180px;
  }
  @media screen and (min-width: 1200px) {
    width: 240px;
  }
`;
export const TITLE_TEXT_DIV = styled.div`
  p {
    font-size: 15px;
    color: #fff;
    @media screen and (min-width: 460px) {
      font-size: 17px;
    }
    @media screen and (min-width: 760px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 22px;
    }
  }
  flex-direction: column;
`;
export const TITLE_H1 = styled.h1`
  color: #fff;
  font-size: 30px;
  @media screen and (min-width: 460px) {
    font-size: 35px;
  }
  @media screen and (min-width: 760px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 45px;
  }
`;
export const PHONE = styled.img`
  display: flex;
  margin: 0 0 0 75px;
  width: 25px;
  @media screen and (min-width: 460px) {
    width: 30px;
  }
  @media screen and (min-width: 760px) {
    width: 30px;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 40px;
  }
`;
export const PHONE_P = styled.p`
  font-size: 20px;
  color: #fff;
  @media screen and (min-width: 460px) {
    font-size: 22px;
  }
  @media screen and (min-width: 760px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1200px) {
    // font-size: 30px;
  }
`;
export const TITLE_NAV = styled.nav`
  ul {
    display: flex;
    width: 100%;
    height: 100%;
  }
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #ffffff4f;
`;
export const LI = styled.li``;
export const LINK = styled.a``;
