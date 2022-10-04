import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageGalleryItemImageWrapper,
} from './StyldeComponents';

const ImageGalleryItem = props => {
  const {
    preview,
    accessKey,
    handleOnClick
  } = props;

  return (
    <ImageGalleryItemImageWrapper
      onClick={handleOnClick}
      accessKey={accessKey}
    >
      <Image src={preview}/>
    </ImageGalleryItemImageWrapper>
  )
}

ImageGalleryItem.propTypes = {
  preview: PropTypes.string,
  accessKey: PropTypes.string,
  handleOnClick: PropTypes.func
};

export default ImageGalleryItem;
