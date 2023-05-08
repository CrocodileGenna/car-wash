import styled from '@emotion/styled';
export const SECTION = styled.section`
  h1 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 25px;
    font-size: 17px;
    color: #fff;
    background-color: #000000b3;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  border-top: 1px solid #000000b3;
  border-bottom: 1px solid #000000b3;
  background-color: #00000021;

  @media screen and (min-width: 460px) {
    padding: 40px 50px;
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 1200px) {
  }
`;
export const LOGO_1 = styled.img`
  position: absolute;
  border-radius: 5px;
  top: 35%;
  left: 65%;
  width: 100px;
  transition: all 0.3s ease 0s;
  :hover,
  :focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 460px) {
    width: 140px;
  }
  @media screen and (min-width: 760px) {
    top: 30px;
    left: 82%;
    width: 110px;
  }
  @media screen and (min-width: 1200px) {
    top: 35%;
    left: 45%;
    width: 145px;
  }
  @media screen and (min-width: 1400px) {
    top: 35%;
    left: 45%;
    width: 180px;
  }
`;
export const WASH_DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TITLE_H2 = styled.h2`
  text-align: center;
  margin: 10px 0 0 0;
  font-size: 13px;
  @media screen and (min-width: 760px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 15px;
  }
`;
export const TABLE = styled.table`
  tr {
    td {
      font-size: 14px;
      padding: 0 2px;
      @media screen and (min-width: 760px) {
        font-size: 15px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 16px;
      }
    }
    padding: 2px 0;
    transition: all 0.3s ease 0s;
    :hover,
    :focus {
      cursor: pointer;
      transform: scale(1.1);
      color: red;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 10px;
`;
