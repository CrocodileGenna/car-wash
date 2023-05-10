import styled from '@emotion/styled';
export const UP_BUTTON = styled.button`
  position: fixed;
  bottom: 80px;
  right: 30px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: red;
  font-size: 38px;
  opacity: 0.7;
  z-index: 9999;
  transition: all 0.3s ease 0s;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
  @media screen and (min-width: 460px) {
    bottom: 100px;
    right: 70px;
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 760px) {
    bottom: 60px;
    right: 80px;
    width: 60px;
    height: 60px;
    font-size: 45px;
  }
  @media screen and (min-width: 1200px) {
    bottom: 140px;
    right: 120px;
    width: 70px;
    height: 70px;
    font-size: 50px;
  }
`;
