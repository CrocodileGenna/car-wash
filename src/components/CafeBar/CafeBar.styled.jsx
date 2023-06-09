import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 15px 5px 15px;
  color: black;
  // background: #dddcdd;
  @media screen and (min-width: 760px) {
    padding: 40px 20px;
  }
`;
export const TITLE_TEXT_DIV = styled.div`
  display: flex;
  margin: 0 0 10px 0;
`;
export const TITLE_ICON_IMG = styled.img`
  width: 40px;
  margin: 0 0 0 20px;
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
export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;
export const LI = styled.li`
  border-radius: 5px;
  margin: 10px;
  width: 130px;
  max-height: 90px;
  transition: all 0.3s ease 0s;
  @media screen and (min-width: 460px) {
    width: 170px;
    max-height: 100px;
  }
  @media screen and (min-width: 760px) {
    width: 250px;
    max-height: 150px;
  }
  @media screen and (min-width: 1200px) {
    width: 320px;
    max-height: 200px;
  }
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 17px 5px rgba(0, 0, 0, 0.4);
  }
`;
export const IMG = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
