import {
  HEADER,
  TITLE_DIV,
  TITLE_INFO_DIV,
  LOGO,
  TITLE_TEXT_DIV,
  TITLE_H1,
  PHONE,
  PHONE_P,
  // TITLE_NAV,
  //   LI,
  //   LINK,
} from './Header.styled';
import phone from './images/phone-svgrepo-com-min.svg';
import logo from './images/bmw-7822989_1280.webp';
export const Header = () => {
  return (
    <HEADER>
      <TITLE_DIV>
        <TITLE_INFO_DIV>
          <div>
            <LOGO src={logo} alt="logo" />
            <TITLE_TEXT_DIV>
              <TITLE_H1>BUMER</TITLE_H1>
              <p>автомийка</p>
            </TITLE_TEXT_DIV>
          </div>
          <div>
            <PHONE src={phone} alt="phone" />
            <PHONE_P>-0-0-0-0-0</PHONE_P>
          </div>
        </TITLE_INFO_DIV>
        {/* <TITLE_NAV>
          <ul>
            <LI>
              <LINK>Автомийка</LINK>
            </LI>
            <LI>
              <LINK>С.Т.О.</LINK>
            </LI>
            <LI>
              <LINK>Кафе-бар</LINK>
            </LI>
          </ul>
        </TITLE_NAV> */}
      </TITLE_DIV>
    </HEADER>
  );
};
