import styled from '@emotion/styled';
export const BACKDROP_DIV = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const MODAL_DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  min-width: 270px;

  @media screen and (min-width: 350px) {
    min-width: 330px;
  }
  @media screen and (min-width: 460px) {
    min-width: 440px;
  }
  @media screen and (min-width: 760px) {
    min-width: 640px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 840px;
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
  z-index: 99999;
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
export const IMG = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  z-index: 9999;
`;
