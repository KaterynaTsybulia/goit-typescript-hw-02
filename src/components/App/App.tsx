import { useEffect, useState } from 'react';
import { getPhotos } from '../../image-api';

import SearchBar from "../SearchBar/SearchBar";
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import { Image } from '../../types';

import './App.css';


export default function App() {
  const [query, setQuery] = useState<string> ("");
  const [page, setPage] = useState<number> (1);
  const [images, setImages] = useState <Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty,setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);


  useEffect (() => {
    if(!query) {
      return;
    }
    const fetchData = async () => {
    setIsLoading(true);
    try {
      const {total_pages, results} = await getPhotos(query, page);
      if(!results.length) {
        return setIsEmpty(true);
      }
      setImages(prevImages => [...prevImages, ...results]);
      setIsVisible(page < total_pages);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
}
fetchData();
  },[page, query])

  
  const onHandleSubmit = (value: string):void =>{
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  }
  
  const onLoadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = (imageData: Image): void => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

return (
  <>
  <SearchBar onSubmit={onHandleSubmit}/>
  {isEmpty && <p className="no-results">No results found</p>}
  {images.length > 0 && <ImageGallery images={images}  onImageClick={openModal} />}
  <ImageModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    imageData={selectedImage}
  />
  {isVisible && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>{isLoading ? "loading" : "Load More" }</LoadMoreBtn>}
  {isLoading && <Loader />}
  {error && <ErrorMessage message={error} />}
</>
)
}
