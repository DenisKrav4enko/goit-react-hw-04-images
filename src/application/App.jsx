import React, { useState, useEffect } from 'react';
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
  const [isLoading, setIsloading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const onSubmit = () => {
    const myKey = '30338895-cb19f84ecf0156a6b9359b7b9';
    const apiUrl = `https://pixabay.com/api/?page=${currentPage}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`;
    const apiUrlWithProps = `https://pixabay.com/api/?q=${find}&page=${currentPage}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`;
    axios.get(`${find ? apiUrlWithProps : apiUrl }`).then((req) => {
      setIsloading(true)
      try {
        setResult(req?.data?.hits);
        setTotalCount(req?.data?.total);
      } catch (error) {
        console.Error(error);
      } finally {
        setIsloading(false);
      }
    })
  }

  useEffect(() => {
    onSubmit()
    setIsloading(false)
    setTimeout(() => {
      setIsloading(true)
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

export default App;
