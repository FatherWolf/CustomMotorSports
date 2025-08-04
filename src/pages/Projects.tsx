import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon, NavigateBefore, NavigateNext } from '@mui/icons-material';

interface ProjectImage {
  id: string;
  url: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  mainImage: string;
  description: string;
  images: ProjectImage[];
}

interface ProjectLayout {
  gridArea: string;
  height: number;
  size: 'large' | 'medium' | 'small';
}

const projectsData: (Project & ProjectLayout)[] = [
  {
    id: '1',
    title: '1974 TORINO',
    mainImage: '/images/torino-main.jpg',
    description: 'Complete restoration with modern performance upgrades',
    gridArea: 'torino',
    height: 400,
    size: 'large',
    images: [
      { id: '1-1', url: '/images/torino-main.jpg', alt: '1974 Torino Main' },
      { id: '1-2', url: '/images/torino-engine.jpg', alt: '1974 Torino Engine Bay' },
      { id: '1-3', url: '/images/torino-interior.jpg', alt: '1974 Torino Interior' },
      { id: '1-4', url: '/images/torino-rear.jpg', alt: '1974 Torino Rear View' },
      { id: '1-5', url: '/images/torino-side.jpg', alt: '1974 Torino Side Profile' },
    ],
  },
  {
    id: '2',
    title: '1969 CAMARO',
    mainImage: '/images/camaro-main.jpg',
    description: 'Classic muscle car with custom paint and performance mods',
    gridArea: 'camaro',
    height: 280,
    size: 'medium',
    images: [
      { id: '2-1', url: '/images/camaro-main.jpg', alt: '1969 Camaro Main' },
      { id: '2-2', url: '/images/camaro-engine.jpg', alt: '1969 Camaro Engine' },
      { id: '2-3', url: '/images/camaro-wheels.jpg', alt: '1969 Camaro Custom Wheels' },
      { id: '2-4', url: '/images/camaro-interior.jpg', alt: '1969 Camaro Interior' },
      { id: '2-5', url: '/images/camaro-detail.jpg', alt: '1969 Camaro Detail Work' },
    ],
  },
  {
    id: '3',
    title: '1970 FORD MUSTANG',
    mainImage: '/images/mustang-main.jpg',
    description: 'Complete ground-up restoration with modern amenities',
    gridArea: 'mustang',
    height: 320,
    size: 'medium',
    images: [
      { id: '3-1', url: '/images/mustang-main.jpg', alt: '1970 Mustang Main' },
      { id: '3-2', url: '/images/mustang-progress.jpg', alt: '1970 Mustang In Progress' },
      { id: '3-3', url: '/images/mustang-body.jpg', alt: '1970 Mustang Body Work' },
      { id: '3-4', url: '/images/mustang-paint.jpg', alt: '1970 Mustang Paint Job' },
      { id: '3-5', url: '/images/mustang-final.jpg', alt: '1970 Mustang Completed' },
    ],
  },
  {
    id: '4',
    title: '1955 BEL AIR',
    mainImage: '/images/belair-main.jpg',
    description: 'Classic 50s styling with modern reliability',
    gridArea: 'belair',
    height: 360,
    size: 'large',
    images: [
      { id: '4-1', url: '/images/belair-main.jpg', alt: '1955 Bel Air Main' },
      { id: '4-2', url: '/images/belair-chrome.jpg', alt: '1955 Bel Air Chrome Work' },
      { id: '4-3', url: '/images/belair-interior.jpg', alt: '1955 Bel Air Interior' },
      { id: '4-4', url: '/images/belair-engine.jpg', alt: '1955 Bel Air Engine' },
      { id: '4-5', url: '/images/belair-detail.jpg', alt: '1955 Bel Air Detail' },
    ],
  },
  {
    id: '5',
    title: 'CUSTOM DRAG CAR',
    mainImage: '/images/dragcar-main.jpg',
    description: 'Purpose-built drag racing machine with full safety equipment',
    gridArea: 'dragcar',
    height: 240,
    size: 'small',
    images: [
      { id: '5-1', url: '/images/dragcar-main.jpg', alt: 'Custom Drag Car Main' },
      { id: '5-2', url: '/images/dragcar-engine.jpg', alt: 'Drag Car Engine' },
      { id: '5-3', url: '/images/dragcar-chassis.jpg', alt: 'Drag Car Chassis' },
      { id: '5-4', url: '/images/dragcar-interior.jpg', alt: 'Drag Car Safety Equipment' },
      { id: '5-5', url: '/images/dragcar-action.jpg', alt: 'Drag Car in Action' },
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #080705 0%, #40434E 100%)',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: '#FFFFFA',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            CUSTOM BUILDS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#FFFFFA',
              opacity: 0.8,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Click on any project to view the complete gallery
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(12, 1fr)',
                md: 'repeat(12, 1fr)',
              },
              gridTemplateRows: {
                xs: 'repeat(5, auto)',
                sm: 'repeat(4, minmax(200px, auto))',
                md: 'repeat(3, minmax(240px, auto))',
              },
              gridTemplateAreas: {
                xs: `
                  "torino"
                  "camaro"
                  "mustang"
                  "belair"
                  "dragcar"
                `,
                sm: `
                  "torino torino torino torino torino torino camaro camaro camaro camaro camaro camaro"
                  "torino torino torino torino torino torino mustang mustang mustang mustang mustang mustang"
                  "belair belair belair belair belair belair mustang mustang mustang mustang mustang mustang"
                  "belair belair belair belair belair belair dragcar dragcar dragcar dragcar dragcar dragcar"
                `,
                md: `
                  "torino torino torino torino torino camaro camaro camaro camaro mustang mustang mustang"
                  "torino torino torino torino torino camaro camaro camaro camaro mustang mustang mustang"
                  "belair belair belair belair belair belair dragcar dragcar dragcar dragcar . ."
                `,
              },
              gap: 3,
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            {projectsData.map((project) => (
              <Card
                key={project.id}
                sx={{
                  gridArea: project.gridArea,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: `0 20px 40px rgba(145, 47, 64, 0.25), 
                               0 0 0 1px rgba(145, 47, 64, 0.1)`,
                    zIndex: 10,
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: project.size === 'large' 
                      ? 'linear-gradient(135deg, rgba(145, 47, 64, 0.1) 0%, rgba(112, 38, 50, 0.05) 100%)'
                      : project.size === 'medium'
                      ? 'linear-gradient(135deg, rgba(64, 67, 78, 0.08) 0%, rgba(145, 47, 64, 0.03) 100%)'
                      : 'linear-gradient(135deg, rgba(112, 38, 50, 0.1) 0%, rgba(64, 67, 78, 0.05) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1,
                  },
                  '&:hover:before': {
                    opacity: 1,
                  },
                  bgcolor: 'rgba(255, 255, 250, 0.98)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(145, 47, 64, 0.08)',
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: `${Math.floor(project.height * 0.7)}px`,
                    backgroundImage: `url(${project.mainImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#40434E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFA',
                    fontSize: project.size === 'large' ? '1.5rem' : project.size === 'medium' ? '1.2rem' : '1rem',
                    fontWeight: 'bold',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover:after': {
                      opacity: 0.8,
                    },
                  }}
                >
                  {project.mainImage.includes('placeholder') && (
                    <Box
                      sx={{
                        textAlign: 'center',
                        zIndex: 2,
                        position: 'relative',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                      }}
                    >
                      {project.title}
                    </Box>
                  )}
                </CardMedia>
                <CardContent
                  sx={{
                    height: `${Math.floor(project.height * 0.3)}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2,
                    p: project.size === 'large' ? 3 : project.size === 'medium' ? 2.5 : 2,
                  }}
                >
                  <Typography
                    variant={project.size === 'large' ? 'h5' : project.size === 'medium' ? 'h6' : 'subtitle1'}
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: '#912F40',
                      mb: 1,
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant={project.size === 'large' ? 'body1' : 'body2'}
                    color="#40434E"
                    sx={{ 
                      lineHeight: 1.4,
                      opacity: 0.9,
                      fontSize: project.size === 'small' ? '0.85rem' : undefined,
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: project.size === 'large' ? '#912F40' : project.size === 'medium' ? '#702632' : '#40434E',
                    opacity: 0.6,
                    zIndex: 3,
                  }}
                />
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            outline: 'none',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            borderRadius: 2,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              borderBottom: '1px solid rgba(255, 255, 250, 0.2)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#FFFFFA',
                fontWeight: 'bold',
              }}
            >
              {selectedProject?.title}
            </Typography>
            <IconButton
              onClick={handleCloseModal}
              sx={{ color: '#FFFFFA' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {selectedProject && (
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 400,
                maxHeight: '60vh',
              }}
            >
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: 'absolute',
                  left: 10,
                  zIndex: 2,
                  color: '#FFFFFA',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(145, 47, 64, 0.8)',
                  },
                }}
              >
                <NavigateBefore />
              </IconButton>

              <Box
                component="img"
                src={selectedProject.images[currentImageIndex]?.url}
                alt={selectedProject.images[currentImageIndex]?.alt}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  bgcolor: '#40434E',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                    parent.style.color = '#FFFFFA';
                    parent.style.fontSize = '1.2rem';
                    parent.textContent = selectedProject.images[currentImageIndex]?.alt || 'Image not available';
                  }
                }}
              />

              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: 'absolute',
                  right: 10,
                  zIndex: 2,
                  color: '#FFFFFA',
                  bgcolor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    bgcolor: 'rgba(145, 47, 64, 0.8)',
                  },
                }}
              >
                <NavigateNext />
              </IconButton>
            </Box>
          )}

          {selectedProject && (
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: '#FFFFFA', opacity: 0.7 }}
              >
                {currentImageIndex + 1} of {selectedProject.images.length}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Projects;