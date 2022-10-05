import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
} from './StyledComponents';

const Button = props => {
  const {
    onSubmit,
    setCurrentPage,
  } = props;

  const handleOnClick = () => {
    setCurrentPage(prevState => prevState + 1)
    onSubmit()
  }

  return (
    <ButtonWrapper onClick={handleOnClick}>
      Button
    </ButtonWrapper>
  )
}

Button.propTypes = {
  onSubmit: PropTypes.func,
  prevState: PropTypes.number,
  handleOnClick: PropTypes.func,
  setCurrentPage: PropTypes.func,
};

export default Button;
