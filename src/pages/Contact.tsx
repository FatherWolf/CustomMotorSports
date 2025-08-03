import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      service: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      vehicle: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Phone',
      content: '(555) 123-4567',
      subtitle: 'Call us for immediate assistance',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Email',
      content: 'info@custommotorsports.com',
      subtitle: 'Send us your questions anytime',
    },
    {
      icon: <FacebookIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Facebook',
      content: 'Custom Motor Sports',
      subtitle: 'Follow us for updates and gallery',
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-6PM',
      subtitle: 'Saturday: 9AM-4PM',
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #912F40 0%, #702632 100%)',
          color: '#FFFFFA',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Get in touch for a free quote on your next project
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <Card sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 4 }}
              >
                Request a Quote
              </Typography>
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </Alert>
              )}
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Service Needed</InputLabel>
                      <Select
                        value={formData.service}
                        onChange={handleSelectChange}
                        label="Service Needed"
                      >
                        <MenuItem value="bodywork">Body Work & Collision Repair</MenuItem>
                        <MenuItem value="paint">Custom Paint Job</MenuItem>
                        <MenuItem value="custom">Custom Project</MenuItem>
                        <MenuItem value="restoration">Vehicle Restoration</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    fullWidth
                    label="Vehicle Information"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    placeholder="Year, Make, Model (e.g., 2020 Ford Mustang)"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Project Details"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    placeholder="Please describe your project or service needs in detail..."
                    variant="outlined"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: 1, md: 1 } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 4 }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <Box key={index}>
                  <Card sx={{ p: 3, textAlign: 'center' }}>
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{info.icon}</Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 1 }}>
                        {info.content}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 4, p: 3, bgcolor: '#40434E', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFFFFA' }}>
                Emergency Services
              </Typography>
              <Typography variant="body2" sx={{ color: '#FFFFFA' }}>
                For urgent collision repairs or emergency towing services, 
                call our 24/7 hotline: <strong>(555) 911-AUTO</strong>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;