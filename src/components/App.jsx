import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/SearchBar';
import ServiceApi from '../services/ServiceApi';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import { useEffect, useState } from 'react';

export function App() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [contentAvailable, setContentAvailable] = useState(false);

    useEffect(() => {
        setImages([]);
        setPage(1);
    }, [search]);

    useEffect(() => {
        if (!search) {
            return;
        }

        if (page > 1) {
            setLoading(true);

            ServiceApi(search, page).then(res => {
                setLoading(false);
                setImages(prev => [...prev, ...res.hits]);
                setContentAvailable(res.hits.length === 12);
            });

            return;
        }

        setLoading(true);

        ServiceApi(search, page).then(res => {
            setLoading(false);
            setImages(res.hits);
            setContentAvailable(res.hits.length === 12);
        });
    }, [search, page]);

    const onImageClick = id => {
        const openedImage = images.find(item => item.id === id);
        setImage(openedImage);
        modalToggle();
    };

    const modalToggle = () => {
        setModalOpen(prev => !prev);
    };

    const contentLoaded = contentAvailable && !loading;

    return (
        <main>
            <SearchBar onSubmit={setSearch} />
            <ImageGallery images={images} onImageClick={onImageClick} />
            {loading && <Loader />}
            {contentLoaded && <Button onButtonClick={() => setPage(prev => prev + 1)} />}
            {modalOpen && (
                <Modal link={image.largeImageURL} alt={image.tags} modalToggle={modalToggle} />
            )}
        </main>
    );
}
