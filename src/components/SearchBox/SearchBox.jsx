import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
    <label className={styles.label}>
    Find contacts by name
    </label>
    <input
      type="text"
      id="search"
      placeholder="Search contacts"
      onChange={handleChange}
      className={styles.input}
    />
  </div>
  );
};

export default SearchBox;
