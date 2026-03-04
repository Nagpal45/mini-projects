import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Box } from '@mui/material';
import { auth } from '../../firebase';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      onRegister();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 'auto', mt: 5 }}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Box sx={{ color: 'red' }}>{error}</Box>}
      <Button onClick={handleRegister} variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
};

export default Register;
