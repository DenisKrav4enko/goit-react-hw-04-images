import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Overlay,
  WrapperModal,
} from './StyledComponents';

const Modal = props => {
  const {
    currentImg,
    setIsOpenModal
  } = props;

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setIsOpenModal(false)
    }
  })


  return (
    <Overlay onClick={() => setIsOpenModal(prevState => !prevState)}>
      <WrapperModal>
        <Image src={currentImg}/>
      </WrapperModal>
    </Overlay>
  )
}

Modal.propTypes = {
  currentImg: PropTypes.string,
  setIsOpenModal: PropTypes.func
};

export default Modal;
