import PropTypes from 'prop-types';

import s from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ link, alt, modalToggle }) {
    useEffect(() => {
        window.addEventListener('keydown', onKeyEscape);

        return () => {
            window.removeEventListener('keydown', onKeyEscape);
        };
    });

    const onKeyEscape = e => {
        if (e.code === 'Escape') {
            modalToggle();
        }
    };

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            modalToggle();
        }
    };

    return (
        <div className={s.backdrop} onClick={e => onBackdropClick(e)}>
            <div className={s.modal}>
                <img src={link} alt={alt} />
            </div>
        </div>
    );
}

Modal.propTypes = {
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    modalToggle: PropTypes.func.isRequired,
};
