import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 15px;
  color: black;
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_TEXT_DIV = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  display: flex;
  margin: 0 0 10px 0;
`;
export const TITLE_ICON_IMG = styled.img`
  width: 45px;
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
export const TITLE_P = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 0 0 10px 0;
`;
export const POSITION_IMG = styled.div`
    display: flex;
    justify-content: space-around;
  }
`;
export const IMG = styled.img`
  display: block;
  border-radius: 5px;
  object-fit: cover;
  margin: 5px;
  width: 125px;
  height: 110px;
  transition: all 0.3s ease 0s;
  @media screen and (min-width: 350px) {
    width: 140px;
    height: 120px;
  }
  @media screen and (min-width: 460px) {
    width: 180px;
    height: 140px;
  }
  @media screen and (min-width: 760px) {
    margin: 10px;
    width: 160px;
    height: 200px;
  }
  @media screen and (min-width: 1200px) {
    margin: 25px;
    width: 260px;
    height: 300px;
  }

  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.4);
  }
`;
