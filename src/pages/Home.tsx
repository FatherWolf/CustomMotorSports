import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Build as BuildIcon,
  Palette as PaletteIcon,
  DirectionsCar as CarIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: 'Body Work',
      description: 'Professional collision repair, dent removal, and bodywork restoration for all vehicle types.',
      icon: <BuildIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Custom Paint Jobs',
      description: 'High-quality automotive painting services including custom colors, designs, and finishes.',
      icon: <PaletteIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Custom Projects',
      description: 'Unique automotive modifications and custom builds tailored to your vision and specifications.',
      icon: <CarIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      image: '/api/placeholder/400/250',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      text: 'Amazing work on my classic Mustang restoration. The attention to detail was incredible!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      text: 'Professional service and quality results. My car looks better than when it was new.',
      rating: 5,
    },
    {
      name: 'Mike Wilson',
      text: 'Custom Motor Sports turned my vision into reality. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #912F40 0%, #702632 100%)',
          color: '#FFFFFA',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 3 }}
          >
            Custom Motor Sports
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            component="h2"
            gutterBottom
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Professional Auto Body Work, Custom Paint & Unique Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
          >
            Transform your vehicle with our expert craftsmanship. From collision repair to custom builds, 
            we bring your automotive dreams to life with precision and passion.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#FFFFFA',
                color: '#912F40',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 250, 0.9)',
                },
              }}
            >
              Get Free Quote
            </Button>
            <Button
              component={Link}
              to="/location"
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#FFFFFA',
                color: '#FFFFFA',
                '&:hover': {
                  borderColor: '#FFFFFA',
                  bgcolor: 'rgba(255, 255, 250, 0.1)',
                },
              }}
            >
              Visit Our Shop
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Our Services
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {services.map((service, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                  sx={{ backgroundColor: '#f5f5f5' }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>

      <Box sx={{ bgcolor: '#40434E', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold', color: '#FFFFFA' }}
          >
            What Our Customers Say
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ flex: 1 }}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: '#ffd700' }} />
                      ))}
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: '#912F40', color: '#FFFFFA', py: 6 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Ready to Transform Your Vehicle?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            Contact us today for a free consultation and quote on your next project.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#FFFFFA',
              color: '#912F40',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 250, 0.9)',
              },
            }}
          >
            Get Started Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;