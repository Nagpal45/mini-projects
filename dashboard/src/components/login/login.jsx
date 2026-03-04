import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth,email, password);
      onLogin();
    } catch (error) {
      console.error(error);
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
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
