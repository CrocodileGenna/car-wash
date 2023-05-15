import { useEffect, useState } from 'react';
import {
  HEADER,
  IMG_DIV,
  TITLE_DIV,
  TITLE_INFO_DIV,
  TITLE_TEXT_DIV,
  TITLE_H1,
  PHONE,
  PHONE_P,
  INPUT_DIV,
  INPUT_INFO_DIV,
  INPUT_INFO_POSITION_DIV,
  INPUT_INFO_IMG,
  INPUT_INFO_LABEL,
  INPUT_INFO_INPUT,
  INPUT_INFO_BUTTON,
  DOP_INFO_DIV,
  // DOP_DOP_INFO_DIV,
  // DOP_INFO_P,
  INFO_BUTTON,
  BACKDROP_DIV,
  MODAL_DIV,
  CLOSE_BUTTON,
  MODAL_INFO_P,
  IFRAME,
  IFRAME_DESCTOP,
} from './Header.styled';
import './Header.css';
import phone from './images/phone-svgrepo-com-min.svg';
import fon_1 from './images/fon_1.jpg';
import fon_2 from './images/fon_2.jpg';
import fon_3 from './images/fon_3.jpg';
import fon_4 from './images/fon_4.jpg';
import fon_5 from './images/fon_5.jpg';
import user from './images/user-svgrepo-com.svg';
import tel from './images/telephone-receiver-material-svgrepo-com.svg';

export const Header = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const images = [fon_1, fon_2, fon_3, fon_4, fon_5];
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 0) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [setCurrentImageIndex, images.length]);
  const backgroundImage = `url(${images[currentImageIndex]})`;

  if (openInfo === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <HEADER prop={{ backgroundImage }}>
      <IMG_DIV>
        <p>
          паркінг
          <span>24/7</span>
        </p>
      </IMG_DIV>
      <TITLE_DIV className={`header ${visible ? '' : 'hidden'}`}>
        <TITLE_INFO_DIV>
          <div>
            <TITLE_TEXT_DIV>
              <TITLE_H1>BUMER</TITLE_H1>
              <p>Без вихідних: 9⁰⁰-18⁰⁰. </p>
            </TITLE_TEXT_DIV>
          </div>
          <div>
            <PHONE src={phone} alt="phone" />
            <PHONE_P>+380-95-259-30-77</PHONE_P>
          </div>
        </TITLE_INFO_DIV>
      </TITLE_DIV>
      <INPUT_DIV>
        <p>НАШ МЕНЕДЖEР ЗАТЕЛЕФОНУЄ ВАМ У НАЙБЛИЖЧИЙ ЧАС!</p>
        <INPUT_INFO_DIV>
          <INPUT_INFO_POSITION_DIV>
            <INPUT_INFO_LABEL htmlFor="name">
              <INPUT_INFO_IMG src={user} alt="user" />
            </INPUT_INFO_LABEL>
            <INPUT_INFO_INPUT type="text" id="name" placeholder="Ім'я" />
          </INPUT_INFO_POSITION_DIV>
          <INPUT_INFO_POSITION_DIV>
            <INPUT_INFO_LABEL htmlFor="phone">
              <INPUT_INFO_IMG src={tel} alt="tel" />
            </INPUT_INFO_LABEL>
            <INPUT_INFO_INPUT type="phone" id="email" placeholder="Телефон" />
          </INPUT_INFO_POSITION_DIV>
        </INPUT_INFO_DIV>

        <INPUT_INFO_BUTTON type="submit">Надіслати</INPUT_INFO_BUTTON>
      </INPUT_DIV>

      <DOP_INFO_DIV>
        {/* <DOP_DOP_INFO_DIV>
          <DOP_INFO_P>
            Ласкаво просимо на автомийку БУМЕР в м.Павлоград!
            <span>
              Ми пропонуємо якісні послуги автомийки за доступною ціною, щоб ваш
              автомобіль виглядав якнайкраще. Завітайте до нас сьогодні та
              відчуйте різницю BUMER!
            </span>
          </DOP_INFO_P> */}
        <INFO_BUTTON onClick={() => setOpenInfo(true)}>
          Відкрити карту
        </INFO_BUTTON>
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
                  <div></div>
                  м.Павлоград, р-н ПШС, пр-к Шахтобудівників 5-А.
                  <br />
                  <span>( За Пенсійним Фондом )</span>
                </MODAL_INFO_P>
              </MODAL_DIV>
            </BACKDROP_DIV>
          </>
        )}
        {/* </DOP_DOP_INFO_DIV> */}
      </DOP_INFO_DIV>
      <IFRAME_DESCTOP
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1526.4167695934116!2d35.84117605652344!3d48.52673426017807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stranslate!5e0!3m2!1suk!2sua!4v1683456114716!5m2!1suk!2sua"
        title="map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></IFRAME_DESCTOP>
    </HEADER>
  );
};
