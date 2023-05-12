import { SECTION, TITLE_H2, IMG } from './AddServices.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import stove from './images/stove.jpg';
import chassis from './images/chassis.jpg';
export const AddSerwices = ({ clickImg, open }) => {
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
        <p>килимів</p>
      </SECTION>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={chassis} alt="chassis" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={stove} alt="stove" />
        </SwiperSlide>
        <SwiperSlide>
          <IMG onClick={chengeImg} src={stove} alt="stove" />
        </SwiperSlide>
      </Swiper>
      <SECTION></SECTION>
    </>
  );
};
