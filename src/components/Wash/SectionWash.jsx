import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
  PRICE_PRICE_IMG,
  IMG,
  LOGO_1,
} from './SectionWash.styled';
import logo from './images/Karcher-Black-Logo.webp';
import check from './images/check-svgrepo-com.svg';
import wash_6 from './images/wash_6.jpg';
import wash_5 from './images/wash_5.jpg';
import wash_1 from './images/wash_1.jpg';
import wash_2 from './images/wash_2.jpg';
import wash_3 from './images/wash_3.jpg';
import wash_4 from './images/wash_4.jpg';

export const SectionWash = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
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
                <CENTER_P>150</CENTER_P>
                <BOTTOM_P>грн</BOTTOM_P>
              </SUPP_DIV>
            </TITLE_BLOCK_DIV>
          </TITLE_DIV>

          <PRICE_UL>
            <PRICE_LI>
              <PRICE_PRICE_IMG src={check} alt="check" />
              <PRICE_NAME_P>Безконтактне миття</PRICE_NAME_P>
            </PRICE_LI>
            <PRICE_LI>
              <PRICE_PRICE_IMG src={check} alt="check" />
              <PRICE_NAME_P>Контактне миття</PRICE_NAME_P>
            </PRICE_LI>
            <PRICE_LI>
              <PRICE_PRICE_IMG src={check} alt="check" />
              <PRICE_NAME_P>Ручне миття</PRICE_NAME_P>
            </PRICE_LI>
            <PRICE_LI>
              <PRICE_PRICE_IMG src={check} alt="check" />
              <PRICE_NAME_P>Суха автомийка</PRICE_NAME_P>
            </PRICE_LI>
          </PRICE_UL>
        </WASH_DIV>
      </SECTION>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_6} alt="wash_6" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_5} alt="wash_5" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_1} alt="wash_1" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_2} alt="wash_2" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_4} alt="wash_4" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={wash_3} alt="wash_3" />
        </SwiperSlide>
      </Swiper>
      <br />
    </>
  );
};
