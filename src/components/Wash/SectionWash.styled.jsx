import styled from '@emotion/styled';
export const SECTION = styled.section`
  h1 {
    span {
      color: red;
    }
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3%;
    left: 0;
    width: 100%;
    font-size: 20px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 15px;
  border-top: 1px solid #00000069;

  @media screen and (min-width: 460px) {
    padding: 40px 20px;
  }
  @media screen and (min-width: 760px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const LOGO_1 = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  max-height: 100%;
  opacity: 0.15;
  z-index: -1;
  transition: all 0.3s ease 0s;
  // @media screen and (min-width: 460px) {
  //   width: 140px;
  // }
  // @media screen and (min-width: 760px) {
  //   top: 30px;
  //   left: 82%;
  //   width: 110px;
  // }
  // @media screen and (min-width: 1200px) {
  //   top: 35%;
  //   left: 45%;
  //   width: 145px;
  // }
  // @media screen and (min-width: 1400px) {
  //   top: 35%;
  //   left: 45%;
  //   width: 180px;
  // }
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
  @media screen and (min-width: 460px) {
  }
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const TITLE_P = styled.p`
  font-size: 9px;
  color: #4c4c4c;
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
    background-color: white;
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
  width: 85%;
`;
export const PRICE_LI = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  padding: 1px;
  border-bottom: 1px solid #00000094;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.04);
    color: red;
    border-bottom: 1px solid red;
  }
`;
export const PRICE_NAME_P = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;
export const PRICE_PRICE_P = styled.p`
  font-size: 14px;
  text-align: right;
  font-weight: 600;
  color: black;
`;
export const IMG_UL = styled.ul`
  li {
    margin: 5px;
    width: 200px;
    transition: all 0.3s ease 0s;
    :hover,
    :focus {
      cursor: pointer;
      transform: scale(1.02);
    }
    @media screen and (min-width: 460px) {
      width: 250px;
    }
    @media screen and (min-width: 760px) {
      width: 210px;
    }
    @media screen and (min-width: 1200px) {
      width: 300px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;

  @media screen and (min-width: 760px) {
    flex-direction: row;
  }
`;
export const IMG = styled.img`
  display: block;
  border-radius: 5px;
  width: 100%;
  max-height: 125px;
  @media screen and (min-width: 760px) {
    max-height: 100px;
  }
  @media screen and (min-width: 1200px) {
    max-height: 150px;
  }
`;
