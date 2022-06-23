import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, alt, id, onImageClick }) {
    return (
        <li className={s.galleryItem} onClick={() => onImageClick(id)}>
            <img src={webformatURL} alt={alt} className={s.image} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    alt: PropTypes.string,
    id: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
};
