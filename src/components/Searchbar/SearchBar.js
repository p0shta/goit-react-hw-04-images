import PropTypes from 'prop-types';
import { useState } from 'react';

import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [search, setSearch] = useState('');

    const onChange = e => {
        setSearch(e.target.value);
    };

    const handlerSubmit = e => {
        e.preventDefault();

        if (search.trim() === '') {
            return;
        }

        onSubmit(search);
    };

    return (
        <>
            <header className={s.searchbar}>
                <form className={s.form} onSubmit={handlerSubmit}>
                    <button type="submit" className={s.button}>
                        Search
                    </button>

                    <input
                        className={s.input}
                        value={search}
                        onChange={onChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        </>
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
