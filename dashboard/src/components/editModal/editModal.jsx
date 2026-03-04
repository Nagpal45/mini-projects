import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const EditModal = ({ open, handleClose, book, handleSave }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleSave(editedBook);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ padding: 2, backgroundColor: 'white', margin: 'auto', top: '25%', position: 'relative' }}>
        {Object.keys(book).map((key) => (
          <TextField
            key={key}
            name={key}
            label={key.replace('_', ' ')}
            value={editedBook[key]}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        ))}
        <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
