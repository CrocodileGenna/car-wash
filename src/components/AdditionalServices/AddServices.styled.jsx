import styled from '@emotion/styled';
export const SECTION = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 35px 15px;
  border-bottom: 1px solid #000000b3;
  color: #fff;
  background-color: #504e4e;
`;
export const TITLE_H2 = styled.h2`
  span {
    color: red;
  }
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1%;
  left: 0;
  width: 100%;
  font-size: 20px;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  margin: 10px;
  width: 250px;
  @media screen and (min-width: 460px) {
    width: 300px;
  }
  @media screen and (min-width: 760px) {
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
  height: 100%;
  min-height: 152px;
  object-fit: cover;
  border-radius: 4px;
`;
