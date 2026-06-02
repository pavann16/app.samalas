import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router'; // If using React Router
import { registerUser } from '../utils/Services';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    if(password!=confirmPassword){
      alert("Confirm Password is not matching.");
      return;
    }
    // Simulate login API call
    try {
      const loginUserDto = {username: username, password: password}
      const response = await registerUser(loginUserDto);

      if (response.status) {
        const data = response.data;
        window.location.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Invalid credentials.');
      }
    } catch (err) {
      setError('There was an error during login.');
      console.error('Login error:', err);
    }
  };
  const handleSignInClick = () => {
    navigate('/login'); // Navigate to the registration page
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src='/content/pictures/logo.png'></img>  
        <LockOutlined sx={{ m: 1, bgcolor: '#dba039', color: 'white' }} />
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="confirm-current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#dba039'  }}
          >
            Register
          </Button>
          <Button
                      fullWidth
                      variant="outlined"
                      onClick={handleSignInClick}
                      sx={{ mb: 2 }}
                    >
                      Sign In
                    </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
}

