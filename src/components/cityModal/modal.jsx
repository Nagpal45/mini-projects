"use client"
import { useState } from 'react';
import styles from './modal.module.css'
import {} from '@mui/material'
import { Close, Search } from '@mui/icons-material';

const Modal = ({ onSubmit, setOpen }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
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
      <button onClick={() => setOpen(false)} className={styles.close}><Close/></button>
    </div>
    </div>
  );
};

export default Modal;