import styled from '@emotion/styled';
import fon from './images/fon_ing_header.jpg';

export const HEADER = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${fon});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 460px) {
    height: 420px;
  }
  @media screen and (min-width: 760px) {
    height: 500px;
  }
  @media screen and (min-width: 1200px) {
    height: 600px;
  }
`;
// TITLE_DIV
export const TITLE_DIV = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  // width: 300px;
  height: 110px;
  background-color: #000000b3;
  @media screen and (min-width: 460px) {
    // width: 400px;
    height: 120px;
  }
  @media screen and (min-width: 760px) {
    // width: 600px;
    height: 90px;
  }
  @media screen and (min-width: 1200px) {
    // width: 800px;
    height: 100px;
  }
`;
export const TITLE_INFO_DIV = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 50px;
  @media screen and (min-width: 460px) {
    width: 60px;
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
  width: 15px;
  @media screen and (min-width: 460px) {
    width: 20px;
  }
  @media screen and (min-width: 760px) {
    width: 25px;
  }
  @media screen and (min-width: 1200px) {
    width: 30px;
  }
`;
export const PHONE_P = styled.p`
  font-size: 15px;
  color: #fff;
  @media screen and (min-width: 460px) {
    font-size: 17px;
  }
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

// DOP_INFO_DIV
export const DOP_INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const DOP_DOP_INFO_DIV = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DOP_INFO_P = styled.p`
  span {
    font-weight: bold;
    font-size: 20px;
    @media screen and (min-width: 760px) {
      font-size: 25px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 30px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  @media screen and (min-width: 760px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;
export const INFO_BUTTON = styled.button`
  display: flex;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: red;
  transition: all 0.3s ease 0s;

  :hover,
  :focus {
    color: black;
    background-color: #fff;
  }
  @media screen and (min-width: 760px) {
    padding: 12px 30px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 14px 35px;
    font-size: 22px;
  }
`;
// MODAL
export const BACKDROP_DIV = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const MODAL_DIV = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  padding: 5px;
  border-radius: 5px;
  background-color: #d1d1d1;

  @media screen and (min-width: 460px) {
    width: 320px;
    height: 420px;
  }
  @media screen and (min-width: 760px) {
    width: 580px;
    height: 420px;
  }
  @media screen and (min-width: 1200px) {
    width: 720px;
    height: 500px;
  }
`;
export const CLOSE_BUTTON = styled.button`
  position: absolute;
  top: 0;
  right: 7px;
  border: none;
  font-size: 20px;
  background-color: #f9f9f900;
  transition: all 0.2s ease 0s;

  :hover,
  :focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 460px) {
    font-size: 22px;
  }
  @media screen and (min-width: 760px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;
export const MODAL_INFO_P = styled.p`
  span {
    padding: 5px;
    color: red;
    font-size: 13px;
    font-weight: bold;
    @media screen and (min-width: 460px) {
      font-size: 14px;
    }
    @media screen and (min-width: 760px) {
      font-size: 16px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 18px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  font-size: 12px;
  @media screen and (min-width: 460px) {
    font-size: 13px;
  }
  @media screen and (min-width: 760px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
`;
export const IFRAME = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 5px;
`;