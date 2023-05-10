import styled from '@emotion/styled';
export const FOOTER = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 15px;
  background: linear-gradient(180deg, #444 0%, #000 100%);
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_H2 = styled.h2`
  span {
    color: red;
  }
  color: #fff;
  font-weight: 800;
`;
export const FOOTER_INFO_DIV = styled.div`
  color: #fff;
  @media screen and (min-width: 460px) {
  }
  @media screen and (min-width: 760px) {
    display: flex;
    margin: 20px 0;
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const INFO_UL = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 460px) {
  }
  @media screen and (min-width: 760px) {
    margin: 0 30px 0 0;
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const INFO_LI = styled.li`
  div {
    margin: 0 0 0 40px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const IMG = styled.img`
  position: absolute;
  max-width: 50px;
  @media screen and (min-width: 760px) {
    top: 10px;
  }
`;
export const TITLE_P = styled.p`
  color: #adadad;
  font-size: 10px;
  @media screen and (min-width: 460px) {
    font-size: 12px;
  }
  @media screen and (min-width: 760px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
export const TEXT_P = styled.p`
  max-width: 240px;
  font-size: 10px;
  @media screen and (min-width: 460px) {
    font-size: 12px;
  }
  @media screen and (min-width: 760px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
export const IFRAME = styled.iframe`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  margin: 10px 0;
  @media screen and (min-width: 760px) {
    margin: 10px 0 0 10px;
    width: 400px;
    height: 360px;
  }
  @media screen and (min-width: 1200px) {
    margin: 10px 0 0 60px;
    width: 500px;
    height: 400px;
  }
`;
export const BOTTOM_INFO_P = styled.p`
  border-top: 1px solid;
  padding: 20px 0;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;
