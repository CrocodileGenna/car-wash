import {
  SECTION,
  TITLE_H2,
  TITLE_P,
  POSITION_IMG,
  IMG,
} from './Cleaner.styled';

import chassis from './images/chassis.jpg';
export const Cleaner = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
      <SECTION>
        <TITLE_H2>
          <span>Х</span>
          імчистка
        </TITLE_H2>
        <TITLE_P>килимів</TITLE_P>
        <POSITION_IMG>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </POSITION_IMG>
      </SECTION>
    </>
  );
};
