import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Location from './pages/Location';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#912F40',
    },
    secondary: {
      main: '#702632',
    },
    background: {
      default: '#FFFFFA',
      paper: '#FFFFFA',
    },
    text: {
      primary: '#080705',
      secondary: '#40434E',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
