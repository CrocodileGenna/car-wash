import {
  SECTION,
  WASH_DIV,
  TITLE_DIV,
  TITLE_POSITION_DIV,
  SUPP_DIV,
  TOP_P,
  CENTER_P,
  BOTTOM_P,
  TITLE_H2,
  TITLE_P,
  TITLE_BLOCK_DIV,
  PRICE_UL,
  PRICE_LI,
  PRICE_NAME_P,
  PRICE_PRICE_P,
  IMG_UL,
  IMG,
  LOGO_1,
} from './SectionWash.styled';
import logo from './images/Karcher-Black-Logo.webp';
import car_1 from './images/car_1.jpeg';
import car_2 from './images/car_2.jpeg';
import car_3 from './images/car_3.jpeg';

export const SectionWash = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <SECTION>
      <LOGO_1 src={logo} alt="logo" />
      <h1>
        <span>А</span>
        втомийка
      </h1>
      <WASH_DIV>
        <TITLE_DIV>
          <TITLE_POSITION_DIV>
            <TITLE_H2>Комплексна мийка</TITLE_H2>
            <TITLE_P>
              ЗОВНІШНЄ МИТТЯ, ВНУТРІШНЄ ВОЛОГЕ ПРИБИРАННЯ, КИЛИМКИ
            </TITLE_P>
          </TITLE_POSITION_DIV>
          <TITLE_BLOCK_DIV>
            <SUPP_DIV>
              <TOP_P>від</TOP_P>
              <CENTER_P>200</CENTER_P>
              <BOTTOM_P>грн</BOTTOM_P>
            </SUPP_DIV>
          </TITLE_BLOCK_DIV>
        </TITLE_DIV>

        <PRICE_UL>
          <PRICE_LI>
            <PRICE_NAME_P>Безконтактне миття</PRICE_NAME_P>
            <PRICE_PRICE_P>ціна грн.</PRICE_PRICE_P>
          </PRICE_LI>
          <PRICE_LI>
            <PRICE_NAME_P>Контактне миття</PRICE_NAME_P>
            <PRICE_PRICE_P>ціна грн.</PRICE_PRICE_P>
          </PRICE_LI>
          <PRICE_LI>
            <PRICE_NAME_P>Ручне миття</PRICE_NAME_P>
            <PRICE_PRICE_P>ціна грн.</PRICE_PRICE_P>
          </PRICE_LI>
          <PRICE_LI>
            <PRICE_NAME_P>Суха автомийка</PRICE_NAME_P>
            <PRICE_PRICE_P>ціна грн.</PRICE_PRICE_P>
          </PRICE_LI>
        </PRICE_UL>
      </WASH_DIV>
      <IMG_UL>
        <li>
          <IMG onClick={chengeImg} src={car_1} alt="car_1" />
        </li>
        <li>
          <IMG onClick={chengeImg} src={car_2} alt="car_2" />
        </li>
        <li>
          <IMG onClick={chengeImg} src={car_3} alt="car_3" />
        </li>
      </IMG_UL>
    </SECTION>
  );
};
