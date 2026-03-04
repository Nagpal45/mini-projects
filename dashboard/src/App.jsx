import React, { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import BookTable from './components/bookTabble/bookTable';
import Register from './components/register/register';
import Login from './components/login/login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      {user ? (
        <BookTable />
      ) : (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          {isRegistering ? (
            <>
              <Register onRegister={() => setIsRegistering(false)} />
              <Button onClick={handleToggle} variant="text">Already have an account? Login</Button>
            </>
          ) : (
            <>
              <Login onLogin={() => setIsRegistering(false)} />
              <Button onClick={handleToggle} variant="text">Don't have an account? Register</Button>
            </>
          )}
        </Box>
      )}
    </div>
  );
};

export default App;
