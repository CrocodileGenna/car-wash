import styled from '@emotion/styled';
export const SECTION = styled.section`
  display: flex;
  justify-content: center;
  padding: 15px;
  border-bottom: 15px solid #fff;
  @media screen and (min-width: 760px) {
    padding: 25px;
    border-bottom: 25px solid #fff;
  }
  @media screen and (min-width: 1200px) {
    padding: 35px;
    border-bottom: 35px solid #fff;
  }
  background-color: #dddcdd;
`;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  background-color: #ffffffc2;
  @media screen and (min-width: 460px) {
    right: 15%;
    width: 230px;
  }
  @media screen and (min-width: 760px) {
    top: 55%;
    right: 0;
    left: 10%;
    width: 260px;
  }
  @media screen and (min-width: 1200px) {
    left: 20%;
    width: 300px;
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
