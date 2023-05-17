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
  margin: 10px;
  width: 130px;
  @media screen and (min-width: 460px) {
    width: 170px;
  }
  @media screen and (min-width: 760px) {
    width: 250px;
  }
  @media screen and (min-width: 1200px) {
    width: 320px;
  }
`;
export const IMG = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 90px;
  object-fit: cover;
  @media screen and (min-width: 460px) {
    max-height: 100px;
  }
  @media screen and (min-width: 760px) {
    max-height: 150px;
  }
  @media screen and (min-width: 1200px) {
    max-height: 200px;
  }
`;
