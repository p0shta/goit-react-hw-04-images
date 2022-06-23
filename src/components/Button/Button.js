import PropTypes from 'prop-types';

import s from './Button.module.css';

export default function Button({ onButtonClick }) {
    return (
        <button type="button" className={s.button} onClick={onButtonClick}>
            Load more
        </button>
    );
}

Button.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};
