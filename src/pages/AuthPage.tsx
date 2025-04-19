import React, { useState, useEffect } from 'react';
import { Box, Container, Snackbar, Alert } from '@mui/material';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';

interface AuthPageProps {
  onAuthSuccess: (token: string) => void;
  isAuthenticated: boolean;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess, isAuthenticated }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/calculator';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  useEffect(() => {
    const mode = searchParams.get('mode');
    setIsSignUp(mode === 'signup');
  }, [searchParams]);

  const handleAuthSubmit = async (data: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would get the token from your auth API
      const mockToken = 'mock-jwt-token';
      onAuthSuccess(mockToken);
      
      // Redirect to the calculator page or the page the user was trying to access
      const from = location.state?.from?.pathname || '/calculator';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleAuth = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    // Update URL parameter
    navigate(`/auth?mode=${!isSignUp ? 'signup' : 'signin'}`, { replace: true });
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AuthForm
          isSignUp={isSignUp}
          onSubmit={handleAuthSubmit}
          onToggleAuth={handleToggleAuth}
          isLoading={isLoading}
        />
      </Box>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AuthPage; 