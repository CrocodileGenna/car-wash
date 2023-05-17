import { Header } from 'components/Header/Header';
import { SectionWash } from './Wash/SectionWash';
import { Parcing } from './Parcing/Parcing';
import { Cleaner } from './Cleaner/Cleaner';
import { CafeBar } from './CafeBar/CafeBar';

import { Footer } from './Footer/Footer';
import { Modal } from './ModalImg/Modal';
import { UP_BUTTON, POSITION_DIV } from './App.styled';
import arrow_top from './image_App/arrow-top-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import { AfterFooterInput } from './AfterFooter/AfterFooterInput';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState('');
  const [openImg, setOpenImg] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState('visible');

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clickImages = e => {
    // console.log(e);
    return setImg(e);
  };
  const openImages = () => {
    setOpenImg(true);
    setBodyOverflow('hidden');
  };

  const closeImages = () => {
    setOpenImg(false);
    setBodyOverflow('visible');
  };

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  // if (openImg === true) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = 'visible';
  // }

  return (
    <>
      <Header />
      <SectionWash clickImg={clickImages} open={openImages} />
      <POSITION_DIV>
        <Parcing clickImg={clickImages} open={openImages} />
        <Cleaner clickImg={clickImages} open={openImages} />
      </POSITION_DIV>
      <CafeBar clickImg={clickImages} open={openImages} />
      <AfterFooterInput />
      <Footer />
      {isVisible && (
        <UP_BUTTON
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <img src={arrow_top} alt="arrow_top" />
        </UP_BUTTON>
      )}
      {openImg && <Modal img={img} close={closeImages} />}
    </>
  );
};
