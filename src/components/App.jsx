import { Header } from 'components/Header/Header';
import { SectionWash } from './Wash/SectionWash';
import { AddSerwices } from './AdditionalServices/AddServices';
import { Footer } from './Footer/Footer';
import { Modal } from './ModalImg/Modal';
import { UP_BUTTON } from './App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState('');
  const [openImg, setOpenImg] = useState(false);

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
  };
  const closeImages = () => {
    setOpenImg(false);
  };
  if (openImg === true) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  return (
    <>
      <Header />
      <SectionWash clickImg={clickImages} open={openImages} />
      <AddSerwices />
      <Footer />
      {isVisible && (
        <UP_BUTTON
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          ⇑
        </UP_BUTTON>
      )}
      {openImg && <Modal img={img} close={closeImages} />}
    </>
  );
};
