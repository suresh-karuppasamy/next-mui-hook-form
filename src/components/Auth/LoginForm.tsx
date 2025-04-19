import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Paper,
  Fade,
  useTheme,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    onSubmit(email, password);
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Fade in timeout={1000}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            bgcolor: 'transparent',
          }}
        >
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 1,
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome Back!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.1rem',
              }}
            >
              Please log in to continue
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} noValidate>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  color: 'text.primary',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Email fontSize="small" />
                EMAIL ADDRESS
              </Typography>
              <TextField
                fullWidth
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                error={!!emailError}
                helperText={emailError}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 1,
                  color: 'text.primary',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Lock fontSize="small" />
                PASSWORD
              </Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{
                          color: 'text.secondary',
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      '&.Mui-checked': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  />
                }
                label="Remember me"
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '0.875rem',
                  },
                }}
              />
              <Link
                href="#"
                underline="none"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: theme.palette.primary.dark,
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                bgcolor: 'black',
                color: 'white',
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              Login
            </Button>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Don't have an account?{' '}
                <Link
                  href="/sign-up"
                  underline="none"
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: theme.palette.primary.dark,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
};

export default LoginForm; 