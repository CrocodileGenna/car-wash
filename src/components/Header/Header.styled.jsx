import styled from '@emotion/styled';

import img from './images/parcing_3.png';

export const HEADER = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 450px;
  background-image: ${e => {
    return e.prop.backgroundImage;
  }};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 460px) {
    height: 460px;
  }
  @media screen and (min-width: 760px) {
    height: 500px;
  }
  @media screen and (min-width: 1200px) {
    height: 600px;
  }
`;
export const IMG_DIV = styled.div`
  p {
    span {
      font-family: cursive;
      font-size: 14px;
      @media screen and (min-width: 760px) {
        font-size: 22px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 26px;
      }
    }
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 90%;
    border-radius: 40px;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    font-family: monospace;
    @media screen and (min-width: 460px) {
      font-size: 14px;
    }
    @media screen and (min-width: 760px) {
      font-size: 22px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 26px;
    }
  }
  position: absolute;
  top: 25%;
  left: 5%;
  width: 70px;
  height: 70px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 460px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 760px) {
    left: 8%;
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 1200px) {
    left: 15%;
    width: 140px;
    height: 140px;
  }
`;
// TITLE_DIV
export const TITLE_DIV = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 90px;
  background-color: #000000e0;
  z-index: 99999;
  transition: transform 0.3s ease;

  @media screen and (min-width: 460px) {
    height: 100px;
  }
  @media screen and (min-width: 760px) {
    height: 85px;
  }
  @media screen and (min-width: 1200px) {
    height: 95px;
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
    font-size: 12px;
    color: #fff;
    @media screen and (min-width: 460px) {
      font-size: 15px;
    }
    @media screen and (min-width: 760px) {
      font-size: 17px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
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
// INPUT_DIV
export const FORM = styled.form`
  p {
    text-align: center;
    font-size: 8px;
    font-weight: bold;
    @media screen and (min-width: 460px) {
      font-size: 10px;
    }
    @media screen and (min-width: 760px) {
      font-size: 12px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 14px;
    }
  }
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 25%;
  right: 5%;
  padding: 10px;
  border-radius: 5px;
  max-width: 200px;
  background-color: #ffffffc2;
  @media screen and (min-width: 460px) {
    right: 15%;
    max-width: 230px;
  }
  @media screen and (min-width: 760px) {
    top: 55%;
    right: 0;
    left: 10%;
    max-width: 260px;
  }
  @media screen and (min-width: 1200px) {
    left: 20%;
    max-width: 300px;
  }
`;
export const INPUT_INFO_DIV = styled.div`
  width: 180px;
  @media screen and (min-width: 460px) {
    width: 220px;
  }
  @media screen and (min-width: 760px) {
    width: 240px;
  }
  @media screen and (min-width: 1200px) {
    width: 280px;
  }
`;
export const INPUT_INFO_POSITION_DIV = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 10px 0 0 0;
`;
export const INPUT_INFO_LABEL = styled.label`
  width: 15px;
  margin: 0 3px 0 0;
  @media screen and (min-width: 760px) {
    width: 18px;
  }
  @media screen and (min-width: 1200px) {
    width: 20px;
  }
`;
export const INPUT_INFO_IMG = styled.img`
  width: 100%;
`;
export const INPUT_INFO_INPUT = styled.input`
  padding: 0 0 0 10px;
  border: none;
  border-radius: 4px;
  width: 100%;
  height: 22px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease 0s;
  @media screen and (min-width: 760px) {
    height: 24px;
  }
  @media screen and (min-width: 1200px) {
    height: 30px;
  }
  :hover,
  :focus {
    color: black;
    background-color: #fff;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;
export const INPUT_INFO_BUTTON = styled.button`
  margin: 7px 0 0 0;
  padding: 7px 20px;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: red;
  transition: all 0.3s ease 0s;
  @media screen and (min-width: 460px) {
    margin: 12px 0 0 0;
    padding: 8px 23px;
    font-size: 12px;
  }
  @media screen and (min-width: 760px) {
    margin: 15px 0 0 0;
    padding: 9px 25px;
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    margin: 15px 0 5px 0;
    padding: 10px 30px;
    font-size: 16px;
  }
  :hover,
  :focus {
    outline: 1px solid;
    color: black;
    background-color: #fff;
  }
`;
export const IFRAME = styled.iframe`
  max-width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 5px;
  margin: 24px 0 0 0;
`;
export const INFO_BUTTON = styled.button`
  display: flex;
  margin: 130px auto;
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
    display: none;
  }
  // @media screen and (min-width: 1200px) {
  //   padding: 14px 35px;
  //   font-size: 22px;
  // }
`;
export const IFRAME_DESCTOP = styled.iframe`
  display: none;
  @media screen and (min-width: 760px) {
    position: absolute;
    display: flex;
    top: 20%;
    right: 5%;
    width: 350px;
    height: 350px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1200px) {
    top: 20%;
    right: 15%;
    width: 450px;
    height: 450px;
  }
`;
// MODAL
export const BACKDROP_DIV = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
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
  top: -2px;
  right: 7px;
  border: none;
  font-size: 20px;
  background-color: #f9f9f900;
  transition: all 0.2s ease 0s;

  :hover,
  :focus {
    color: red;
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

// DOP_INFO_DIV
export const DOP_INFO_DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto ;
  margin-top: 200px;
  // @media screen and (min-width: 760px) {
  //   margin: 65px auto;
  // }
  // @media screen and (min-width: 1200px) {
  //   margin: 110px auto;
  }
`;
export const DOP_DOP_INFO_DIV = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DOP_INFO_P = styled.p`
  span {
    font-weight: 100;
    // font-size: 20px;
    // @media screen and (min-width: 760px) {
    //   font-size: 25px;
    // }
    // @media screen and (min-width: 1200px) {
    //   font-size: 30px;
    // }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 0 10px 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  background-color: #000000ba;
  z-index: 9;
  @media screen and (min-width: 760px) {
    max-width: 500px;
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
`;
