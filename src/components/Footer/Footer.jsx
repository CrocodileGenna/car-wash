import {
  FOOTER,
  TITLE_H2,
  FOOTER_INFO_DIV,
  INFO_UL,
  INFO_LI,
  IMG,
  TITLE_P,
  TEXT_P,
  IFRAME,
  BOTTOM_INFO_P,
} from './Footer.styled';
import nav from './images/nav.svg';
import phone from './images/phone.svg';
import email from './images/email.svg';
import time from './images/time.svg';
export const Footer = () => {
  return (
    <FOOTER>
      <TITLE_H2>
        <span>К</span>
        онтакти
      </TITLE_H2>
      <FOOTER_INFO_DIV>
        <INFO_UL>
          <INFO_LI>
            <IMG src={nav} alt="nav" />
            <div>
              <TITLE_P>Адреса:</TITLE_P>
              <TEXT_P>
                м.Павлоград, р-н ПШС, пр-к Шахтобудівників 5-А.(за Пенсійним
                Фондом)
              </TEXT_P>
            </div>
          </INFO_LI>
          <INFO_LI>
            <IMG src={phone} alt="phone" />
            <div>
              <TITLE_P>Телефони:</TITLE_P>
              <TEXT_P>+380-95-259-30-77</TEXT_P>
            </div>
          </INFO_LI>
          <INFO_LI>
            <IMG src={email} alt="email" />
            <div>
              <TITLE_P>Електронна пошта:</TITLE_P>
              <TEXT_P>asdasd@asdas</TEXT_P>
            </div>
          </INFO_LI>
          <INFO_LI>
            <IMG src={time} alt="time" />
            <div>
              <TITLE_P>Час роботи:</TITLE_P>
              <TEXT_P>Без вихідних: 9⁰⁰-18⁰⁰.</TEXT_P>
            </div>
          </INFO_LI>
        </INFO_UL>
        <IFRAME
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1526.4167695934116!2d35.84117605652344!3d48.52673426017807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stranslate!5e0!3m2!1suk!2sua!4v1683456114716!5m2!1suk!2sua"
          title="map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></IFRAME>
      </FOOTER_INFO_DIV>
      <BOTTOM_INFO_P>Copyright © 2022. Усі права захищені</BOTTOM_INFO_P>
    </FOOTER>
  );
};
