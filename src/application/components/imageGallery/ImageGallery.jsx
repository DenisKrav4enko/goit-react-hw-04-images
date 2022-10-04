import React from 'react';
import PropTypes from 'prop-types';
import {
  Gallery,
} from './StyledComponents';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  const {
    result,
    setCurrentImg,
    setIsOpenModal,
  } = props;

  const handleOnClick = event => {
    setCurrentImg(event.currentTarget.accessKey)
    setIsOpenModal(prevState => !prevState)
    event.stopPropagation()
  }

  return (
    <Gallery>
      {result.map(item =>
        <ImageGalleryItem
          key={item?.id}
          preview={item?.webformatURL}
          handleOnClick={handleOnClick}
          accessKey={item?.largeImageURL}
        />
      )}
    </Gallery>
  )
}

ImageGallery.propTypes = {
  result: PropTypes.array,
  setCurrentImg: PropTypes.func,
  setIsOpenModal: PropTypes.func,
};

export default ImageGallery;
