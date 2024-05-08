"use client"
import { useState } from 'react';
import styles from './modal.module.css'
import {} from '@mui/material'
import { Search } from '@mui/icons-material';

const Modal = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          <Search/>
        </button>
      </form>
    </div>
  );
};

export default Modal;