import styled from 'styled-components';

export const SearchbarWrapper = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 12px 24px;
  background-color: #3f51b5;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 600px;
  height: 25px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  width: 60px;
  height: 25px;
  border: none;
  background-color: #edd0ff;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  font-weight: 700;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  color: #1c1d1f;
  border: none;
  outline: none;
  padding: 0 4px;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;
