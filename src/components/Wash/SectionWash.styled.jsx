import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 15px 10px 15px;

  @media screen and (min-width: 760px) {
    align-items: flex-start;
    padding: 40px 160px 10px 160px;
  }
  @media screen and (min-width: 1200px) {
    padding: 40px 200px 10px 200px;
  }
`;
export const LOGO_1 = styled.img`
  position: absolute;
  top: 70%;
  left: 60%;
  border-radius: 5px;
  width: 100px;
  @media screen and (min-width: 460px) {
    width: 120px;
  }
  @media screen and (min-width: 760px) {
    top: 56%;
    left: 50%;
    width: 220px;
  }
  @media screen and (min-width: 1200px) {
    top: 14%;
    left: 60%;
    width: 400px;
  }
`;
export const TITLE_TEXT_DIV = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;
export const TITLE_ICON_IMG = styled.img`
  width: 50px;
  margin: 0 20px 0 0;
`;
export const TITLE_H1 = styled.h1`
  span {
    color: red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 800;
`;
export const WASH_DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 440px;
  margin: 10px 0;
`;
export const TITLE_DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 15px 0;
`;
export const TITLE_POSITION_DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TITLE_H2 = styled.h2`
  text-align: center;
  font-size: 16px;
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const TITLE_P = styled.p`
  font-size: 9px;
  color: red;
  // color: red;
  @media screen and (min-width: 460px) {
    font-size: 9px;
  }
  @media screen and (min-width: 760px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 10px;
  }
`;
export const TITLE_BLOCK_DIV = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  height: 40px;
  margin: 0 0 0 25px;
  border-radius: 3px 6px 6px 3px;
  background: #000000;
  color: #ffffff;
  transition: all 0.3s ease 0s;
  :before {
    content: '';
    position: absolute;
    display: block;
    left: -24px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 25px solid #000000;
  }
`;
export const SUPP_DIV = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  :after {
    content: '';
    background-color: #d3d3d3;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    display: block;
    position: absolute;
    left: -14%;
    top: 39%;
  }
`;
export const TOP_P = styled.p`
  position: absolute;
  top: 17%;
  left: 3%;
`;
export const CENTER_P = styled.p`
  position: absolute;
  top: 20%;
  left: 30%;
  font-size: 22px;
  color: yellow;
`;
export const BOTTOM_P = styled.p`
  position: absolute;
  bottom: 20%;
  right: 5%;
`;
export const PRICE_UL = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // width: 85%;
`;
export const PRICE_LI = styled.li`
  display: flex;
  justify-content: flex-start;
  margin: 2px 0;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.02);
    color: red;
    // border-bottom: 1px solid red;
  }
`;
export const PRICE_NAME_P = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 1px;
  border-bottom: 1px solid #00000094;
  @media screen and (min-width: 760px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
  :hover,
  :focus {
    cursor: pointer;
    color: red;
    border-bottom: 1px solid red;
  }
`;
export const PRICE_PRICE_IMG = styled.img`
  width: 20px;
  margin: 0 5px 0 0;
  text-align: right;
  @media screen and (min-width: 760px) {
    width: 24px;
  }
  @media screen and (min-width: 1200px) {
    width: 26px;
  }
`;
export const IMG = styled.img`
  display: block;
  margin: 5px 0 15px 10px;
  border-radius: 5px;
  object-fit: cover;
  width: 87px;
  height: 100px;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.4);
  }
  @media screen and (min-width: 350px) {
    width: 100px;
  }
  @media screen and (min-width: 460px) {
    margin: 10px 0 20px 30px;
    width: 150px;
    height: 120px;
  }
  @media screen and (min-width: 760px) {
    margin: 10px 0 20px 20px;
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 900px) {
    margin: 10px 0 20px 60px;
  }
  @media screen and (min-width: 1200px) {
    margin: 10px 0 25px 40px;
    width: 350px;
    height: 300px;
  }
  @media screen and (min-width: 1400px) {
    margin: 10px 0 25px 60px;
  }
`;
