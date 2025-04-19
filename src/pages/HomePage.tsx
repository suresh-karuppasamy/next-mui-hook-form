import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  Fade,
  Zoom,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Calculate as CalculateIcon,
  Timeline as TimelineIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

interface HomePageProps {
  isAuthenticated: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isAuthenticated }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: <CalculateIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Accurate EMI Calculator',
      description: 'Calculate your loan EMIs with precision and plan your finances better.',
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Detailed Payment Schedule',
      description: 'Get a complete breakdown of your loan payments with interest calculations.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Secure & Private',
      description: 'Your financial data is always secure and never shared with third parties.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Fast & Easy',
      description: 'Quick calculations and intuitive interface for a seamless experience.',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                    }}
                  >
                    Smart EMI Calculator
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ mb: 4, maxWidth: '80%' }}
                  >
                    Calculate your loan EMIs, plan your finances, and make informed decisions with our powerful EMI calculator.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/auth?mode=signup')}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                          background: 'linear-gradient(45deg, #1565c0 30%, #1E88E5 90%)',
                        },
                      }}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => navigate('/auth?mode=signin')}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          bgcolor: 'action.hover',
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1000} style={{ transitionDelay: '300ms' }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 2,
                    }}
                  >
                    <CalculateIcon
                      sx={{
                        fontSize: 200,
                        color: 'primary.main',
                        opacity: 0.8,
                      }}
                    />
                  </Box>
                </Paper>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
              background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Choose Our EMI Calculator?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      bgcolor: 'background.default',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Ready to Calculate Your EMIs?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of users who trust our EMI calculator for their financial planning.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/auth?mode=signup')}
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Get Started Now
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 