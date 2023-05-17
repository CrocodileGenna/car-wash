import { useState, useRef } from 'react';
import Notiflix from 'notiflix';
import { sendMessage } from 'components/telegramBot';
import {
  SECTION,
  FORM,
  INPUT_INFO_DIV,
  INPUT_INFO_POSITION_DIV,
  INPUT_INFO_IMG,
  INPUT_INFO_LABEL,
  INPUT_INFO_INPUT,
  INPUT_INFO_BUTTON,
} from './AfterFooterInput.styled';
import user from './images/user-svgrepo-com.svg';
import tel from './images/telephone-receiver-material-svgrepo-com.svg';

export const AfterFooterInput = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const formRef = useRef(null);
  const considersUserName = e => {
    setUserName(e.target.value);
  };
  const considersPhone = e => {
    setUserPhone(e.target.value);
  };

  const sendValueInput = e => {
    e.preventDefault();
    if (userName === '' && userPhone === '') {
      Notiflix.Notify.failure('Будь-ласка, заповніть всі поля.');
      console.log('no value');
      return;
    }
    sendMessage(userName, userPhone);
    formRef.current.reset();
  };

  return (
    <SECTION>
      <FORM ref={formRef} onSubmit={sendValueInput}>
        <p>НАШ МЕНЕДЖEР ЗАТЕЛЕФОНУЄ ВАМ У НАЙБЛИЖЧИЙ ЧАС!</p>
        <INPUT_INFO_DIV>
          <INPUT_INFO_POSITION_DIV>
            <INPUT_INFO_LABEL htmlFor="name">
              <INPUT_INFO_IMG src={user} alt="user" />
            </INPUT_INFO_LABEL>
            <INPUT_INFO_INPUT
              onChange={considersUserName}
              type="text"
              id="name"
              placeholder="Ім'я"
              pattern="[a-zA-Zа-яА-ЯіІїЇєЄґҐ' ]{2,}"
              required
            />
          </INPUT_INFO_POSITION_DIV>
          <INPUT_INFO_POSITION_DIV>
            <INPUT_INFO_LABEL htmlFor="phone">
              <INPUT_INFO_IMG src={tel} alt="tel" />
            </INPUT_INFO_LABEL>
            <INPUT_INFO_INPUT
              onChange={considersPhone}
              type="phone"
              id="email"
              placeholder="Телефон"
              pattern="[0-9]{10}"
              required
            />
          </INPUT_INFO_POSITION_DIV>
        </INPUT_INFO_DIV>

        <INPUT_INFO_BUTTON type="submit">Надіслати</INPUT_INFO_BUTTON>
      </FORM>
    </SECTION>
  );
};
