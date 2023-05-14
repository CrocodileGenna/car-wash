import styled from '@emotion/styled';
import img from './images/parcing_3.png';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 15px 0 15px;
  //   border-top: 1px solid #00000069;
  // border-bottom: 1px solid #00000069;
  color: black;
  // background: #dddcdd;
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_H2 = styled.h2`
  span {
    color: red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 800;
`;
export const TITLE_P = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 0 0 10px 0;
`;
export const IMG = styled.img`
  display: block;
  border-radius: 5px;
  object-fit: cover;
  margin: 5px;
  width: 250px;
  height: 150px;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.4);
  }
  @media screen and (min-width: 460px) {
    width: 260px;
    height: 160px;
  }
  @media screen and (min-width: 760px) {
    margin: 10px;
    width: 300px;
    height: 200px;
  }
  @media screen and (min-width: 1200px) {
    margin: 25px;
    width: 450px;
    height: 300px;
  }
`;
export const IMG_DIV = styled.div`
  p {
    span {
      font-family: cursive;
      font-size: 14px;
      // @media screen and (min-width: 760px) {
      //   font-size: 20px;
      // }
      @media screen and (min-width: 1200px) {
        font-size: 20px;
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
    // @media screen and (min-width: 760px) {
    //   font-size: 20px;
    // }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }
  position: absolute;
  top: 25%;
  left: 75%;
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
    top: 5%;
    left: 70%;
    // width: 100px;
    // height: 100px;
  }
  @media screen and (min-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`;
