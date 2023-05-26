import {
  SECTION,
  TITLE_TEXT_DIV,
  TITLE_H1,
  TITLE_ICON_IMG,
  TITLE_P,
  POSITION_IMG,
  IMG,
} from './Cleaner.styled';
import svg_icon from './images/brooming-svgrepo-com (1).svg';
import carpet_1 from './images/carpet_1.jpg';
import carpet_2 from './images/carpet_2.JPG';
export const Cleaner = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
      <SECTION>
        <TITLE_TEXT_DIV>
          <TITLE_ICON_IMG src={svg_icon} alt="svg_icon" />
          <div>
            <TITLE_H1>
              <span>Х</span>
              імчистка
            </TITLE_H1>
            <TITLE_P>килимів</TITLE_P>
          </div>
        </TITLE_TEXT_DIV>
        <POSITION_IMG>
          <IMG onClick={chengeImg} src={carpet_1} alt="carpet_BUMER_PVL_1" />
          <IMG onClick={chengeImg} src={carpet_2} alt="carpet_BUMER_PVL_2" />
        </POSITION_IMG>
      </SECTION>
    </>
  );
};
