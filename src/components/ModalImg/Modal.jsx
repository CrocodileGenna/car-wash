import { BACKDROP_DIV, MODAL_DIV, CLOSE_BUTTON, IMG } from './Modal.styled';
export function Modal({ img, close }) {
  return (
    <BACKDROP_DIV
      id="backdrop"
      onClick={e => {
        if (e.target.id === 'backdrop') {
          return close(true);
        }
        return;
      }}
    >
      <MODAL_DIV>
        <CLOSE_BUTTON onClick={close}>✖</CLOSE_BUTTON>
        <IMG src={img} alt={img} />
      </MODAL_DIV>
    </BACKDROP_DIV>
  );
}
