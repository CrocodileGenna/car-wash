import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 15px;
  border-top: 1px solid #00000069;
  border-bottom: 1px solid #00000069;
  color: black;

  background: #dddcdd;
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
export const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
  @media screen and (min-width: 760px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 700px;
  }
  @media screen and (min-width: 1200px) {
    width: 900px;
  }
`;
export const LI = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  width: 120px;
  @media screen and (min-width: 460px) {
    width: 150px;
  }
  @media screen and (min-width: 560px) {
    width: 220px;
  }
  @media screen and (min-width: 760px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 250px;
  }
`;
export const INFO_P = styled.p`
  font-family: system-ui;
  font-size: 15px;
  margin: 0 0 10px 0;
  text-align: center;
  @media screen and (min-width: 460px) {
    font-size: 17px;
  }
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
`;
export const IMG = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 4px;
  @media screen and (min-width: 460px) {
    height: 120px;
  }
  @media screen and (min-width: 560px) {
    height: 130px;
  }
  @media screen and (min-width: 760px) {
    height: 140px;
  }
  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`;
