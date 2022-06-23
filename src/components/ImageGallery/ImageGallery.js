import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
    const content =
        images &&
        images.map((img, idx) => (
            <ImageGalleryItem
                onImageClick={onImageClick}
                key={idx}
                id={img.id}
                alt={img.tags}
                webformatURL={img.webformatURL}
            />
        ));

    return (
        <>
            <section className={s.section}>
                <ul className={s.gallery}>{content}</ul>
            </section>
        </>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
};
