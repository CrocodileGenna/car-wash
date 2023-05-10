import { useState } from 'react';
import {
  HEADER,
  IMG_DIV,
  TITLE_DIV,
  TITLE_INFO_DIV,
  // LOGO,
  TITLE_TEXT_DIV,
  TITLE_H1,
  PHONE,
  PHONE_P,
  DOP_INFO_DIV,
  DOP_DOP_INFO_DIV,
  DOP_INFO_P,
  INFO_BUTTON,
  BACKDROP_DIV,
  MODAL_DIV,
  CLOSE_BUTTON,
  MODAL_INFO_P,
  IFRAME,
} from './Header.styled';
import phone from './images/phone-svgrepo-com-min.svg';
// import nav from './images/nav.svg';
// import logo from './images/bmw-7822989_1280.webp';
export const Header = () => {
  const [openInfo, setOpenInfo] = useState(false);
  if (openInfo === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return (
    <HEADER>
      <IMG_DIV>
        <p>
          паркінг
          <span>24/7</span>
        </p>
      </IMG_DIV>
      <TITLE_DIV>
        <TITLE_INFO_DIV>
          <div>
            {/* <LOGO src={logo} alt="logo" /> */}
            <TITLE_TEXT_DIV>
              <TITLE_H1>BUMER</TITLE_H1>
              <p>Без вихідних: 9⁰⁰-18⁰⁰. </p>
            </TITLE_TEXT_DIV>
          </div>
          <div>
            <PHONE src={phone} alt="phone" />
            <PHONE_P>-0-0-0-0-0</PHONE_P>
          </div>
        </TITLE_INFO_DIV>
      </TITLE_DIV>
      <DOP_INFO_DIV>
        <DOP_DOP_INFO_DIV>
          <DOP_INFO_P>
            ДЕ НАС ЗНАЙТИ
            <span>↧</span>
          </DOP_INFO_P>
          <INFO_BUTTON onClick={() => setOpenInfo(true)}>Відкрити</INFO_BUTTON>
          {openInfo && (
            <>
              <BACKDROP_DIV
                id="backdrop"
                onClick={e => {
                  if (e.target.id === 'backdrop') {
                    setOpenInfo(false);
                  }
                  return;
                }}
              >
                <MODAL_DIV>
                  <CLOSE_BUTTON
                    onClick={() => {
                      setOpenInfo(false);
                    }}
                  >
                    ✖
                  </CLOSE_BUTTON>
                  <IFRAME
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1526.4167695934116!2d35.84117605652344!3d48.52673426017807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stranslate!5e0!3m2!1suk!2sua!4v1683456114716!5m2!1suk!2sua"
                    title="map"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></IFRAME>
                  <MODAL_INFO_P>
                    {/* <img src={nav} alt="nav" /> */}
                    <div></div>
                    м.Павлоград, р-н ПШС, пр-к Шахтобудівників 5-А.
                    <br />
                    <span>( За Пенсійним Фондом )</span>
                  </MODAL_INFO_P>
                </MODAL_DIV>
              </BACKDROP_DIV>
            </>
          )}
        </DOP_DOP_INFO_DIV>
      </DOP_INFO_DIV>
    </HEADER>
  );
};
