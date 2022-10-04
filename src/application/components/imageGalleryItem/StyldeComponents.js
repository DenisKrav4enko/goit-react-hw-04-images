import styled from 'styled-components';

export const ImageGalleryItemImageWrapper = styled.li`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);



  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);



  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
