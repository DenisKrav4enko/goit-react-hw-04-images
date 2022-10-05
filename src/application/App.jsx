import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Wrapper,
} from './StyledComponents';
import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';
import Loader from './components/loader/Loader';

const App = () => {
  const [result, setResult] = useState([]);
  const [find, setFind] = useState('');
  const [currentImg, setCurrentImg] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const onSubmit = () => {
    const myKey = '30338895-cb19f84ecf0156a6b9359b7b9';
    const apiUrl = `https://pixabay.com/api/?page=${currentPage}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`;
    const apiUrlWithProps = `https://pixabay.com/api/?q=${find}&page=${currentPage}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`;
    axios.get(`${find ? apiUrlWithProps : apiUrl }`).then((req) => {
      setIsLoading(true)
      try {
        setResult(req?.data?.hits);
        setTotalCount(req?.data?.total);
      } catch (error) {
        console.Error(error);
      } finally {
        setIsLoading(false);
      }
    })
  }

  useEffect(() => {
    onSubmit()
    setIsLoading(false)
    setTimeout(() => {
      setIsLoading(true)
    }, 80000)
  }, [])

  return (
    <Wrapper>
      <Searchbar
        find={find}
        setFind={setFind}
        onSubmit={onSubmit}
      />
      {isLoading
        ? <Loader/>
        : <ImageGallery
          result={result}
          setCurrentImg={setCurrentImg}
          setIsOpenModal={setIsOpenModal}
        />
      }
      {isOpenModal && currentImg
        ? <Modal
          currentImg={currentImg}
          setIsOpenModal={setIsOpenModal}
        />
        : <></>
      }
      {totalCount > 12
        ? <Button setCurrentPage={setCurrentPage}
                  onSubmit={onSubmit}
                  setResult={setResult}/>
        : <></>
      }
    </Wrapper>
  );
};

App.propTypes = {
  req: PropTypes.array,
  data: PropTypes.object,
  find: PropTypes.string,
  hits: PropTypes.array,
  total: PropTypes.number,
  myKey: PropTypes.string,
  apiUrl: PropTypes.string,
  result: PropTypes.array,
  setFind: PropTypes.func,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  setResult: PropTypes.func,
  currentImg: PropTypes.string,
  totalCount: PropTypes.number,
  isOpenModal: PropTypes.bool,
  currentPage: PropTypes.number,
  setIsLoading: PropTypes.func,
  setCurrentImg: PropTypes.func,
  setTotalCount: PropTypes.func,
  setIsOpenModal: PropTypes.func,
  setCurrentPage: PropTypes.func,
  apiUrlWithProps: PropTypes.string,
}

export default App;
