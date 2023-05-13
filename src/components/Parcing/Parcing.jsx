// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { SECTION, TITLE_H2, IMG, IMG_DIV } from './Parcing.styled';
import car_1 from './images/car_1.jpeg';
// import car_2 from './images/car_2.jpeg';
// import car_3 from './images/car_3.jpeg';
export const Parcing = ({ clickImg, open }) => {
  const chengeImg = e => {
    clickImg(e.target.src);
    open(true);
  };
  return (
    <>
      <SECTION>
        <IMG_DIV>
          <p>
            місяць
            <span>500грн</span>
          </p>
        </IMG_DIV>
        <TITLE_H2>
          <span>П</span>аркінг
        </TITLE_H2>
        <p>20 грн. за добу</p>
        <div>
          <IMG onClick={chengeImg} src={car_1} alt="car_1" />
        </div>
      </SECTION>
    </>
  );
};
