import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  LinearProgress,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router'; // If using React Router
import { loginPage } from '../utils/Services';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    setLoading(true);
    event.preventDefault();
    setError('');

    // Simulate login API call
    try {
      const loginUserDto = {username: username, password: password}
      const response = await loginPage(loginUserDto);

      if (response.status) {
        const data = response.data;
        localStorage.setItem('token', data); // Store token
        window.location.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Invalid credentials.');
      }
    } catch (err) {
      setError('There was an error during login.');
      console.error('Login error:', err);
    }
    setLoading(false);
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the registration page
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 0, backgroundColor: '#dba039'  }}
          >
            Sign In
          </Button>
          {loading && <LinearProgress></LinearProgress>}
          <Button
            fullWidth
            variant="outlined"
            onClick={handleRegisterClick}
            sx={{ mt: 5, mb: 2, }}
          >
            Register
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

