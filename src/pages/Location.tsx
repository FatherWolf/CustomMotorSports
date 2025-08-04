import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Phone as PhoneIcon,
  DirectionsCar as ParkingIcon,
  Security as SecurityIcon,
  Accessible as AccessibleIcon,
} from '@mui/icons-material';

const Location: React.FC = () => {
  const theme = useTheme();

  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const amenities = [
    {
      icon: <ParkingIcon />,
      title: 'Vehicle Drop-Off',
      description: 'Secure area for long-term project vehicles',
    },
    {
      icon: <SecurityIcon />,
      title: '24/7 Security',
      description: 'Continuous monitoring with on-site staff and cameras',
    },
    {
      icon: <AccessibleIcon />,
      title: 'Accessible',
      description: 'Wheelchair accessible facilities and office area',
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
            Visit Our Shop
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Secure drop-off facility for custom fabrication and restoration projects
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <Card sx={{ mb: 4 }}>
              <Box
                sx={{
                  height: 400,
                  bgcolor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed #ddd',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Interactive Map Placeholder
                  <br />
                  (Google Maps Integration)
                </Typography>
              </Box>
            </Card>

            <Card sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 'bold', mb: 3 }}
              >
                Facility Amenities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {amenities.map((amenity, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          color: theme.palette.primary.main,
                          mt: 0.5,
                        }}
                      >
                        {amenity.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {amenity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {amenity.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          <Box sx={{ flex: { xs: 1, md: 1 } }}>
            <Card sx={{ p: 3, mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Address
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  123 Auto Shop Lane
                  <br />
                  Motor City, MC 12345
                  <br />
                  United States
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Located in the heart of the automotive district, 
                  easily accessible from major highways.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ p: 3, mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ScheduleIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Drop-Off Hours
                  </Typography>
                </Box>
                <List dense>
                  {businessHours.map((schedule, index) => (
                    <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography component="span" sx={{ fontWeight: 'medium' }}>
                              {schedule.day}
                            </Typography>
                            <Typography
                              component="span"
                              color={schedule.hours === 'Closed' ? 'text.secondary' : 'text.primary'}
                            >
                              {schedule.hours}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card sx={{ p: 3, mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Contact Information
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Phone:</strong> (555) 123-4567
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Email:</strong> info@custommotorsports.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Call ahead to discuss your custom project and arrange vehicle drop-off.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ p: 3, bgcolor: '#40434E' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#FFFFFA' }}>
                  Secure Vehicle Storage
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#FFFFFA' }}>
                  Your project vehicle will be stored in our secure facility with 
                  24/7 monitoring and on-site staff presence for complete security.
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFA' }}>
                  <strong>From Downtown:</strong> Take Highway 101 North, 
                  exit Motor City Blvd, turn right on Auto Shop Lane.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: '#912F40', color: '#FFFFFA', py: 6 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Specialized Custom Work
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
            We focus exclusively on custom fabrication, motor swaps, restorations, and unique builds. 
            No oil changes, basic maintenance, or emergency towing - just expert craftsmanship.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Drop off your project and trust our specialists to bring your vision to life
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Location;