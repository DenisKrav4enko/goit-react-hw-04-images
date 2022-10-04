import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './StyledComponents';

const Searchbar = props => {
  const {
    find,
    setFind,
    onSubmit
  } = props;

  const handleOnSubmit = event => {
    onSubmit()
    event.preventDefault();
  }

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type={'text'}
          value={find}
          onChange={event => setFind(event.currentTarget.value)}
          placeholder={'What topic of the search pictures'}
        />
      </SearchForm>
    </SearchbarWrapper>
  )
}

Searchbar.propTypes = {
  find: PropTypes.string,
  setFind: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Searchbar;
