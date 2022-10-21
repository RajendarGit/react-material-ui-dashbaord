import { Box, createTheme, CssBaseline, Grid, Stack, ThemeProvider } from '@mui/material';
import Nav from './components/Nav';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { grey, pink } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import { Explore } from './pages/Explore';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Subscriptions } from './pages/Subscriptions';
import { Profile } from './pages/Profile';

function App() {

  const [mode, setMode] = useState('light')

  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
          // default: grey[100],
      },
      primary: {
        main: pink[600],
        sub: grey[50],
        base: '#ffffff',
      },
      secondary: {
        main: grey[100],
        sub: grey[50],
        base: '#333333',
      },
    },
    typography: {
      h1: {
          fontSize: '3rem',
          '@media (min-width: 992px)': {
              fontSize: '3.5rem',
          },
      },
      h2: {
          fontSize: '2.8rem',
          '@media (min-width: 992px)': {
              fontSize: '3rem',
          },
      },
      h3: {
          fontSize: '2.25rem',
          '@media (min-width: 992px)': {
              fontSize: '2.5rem',
          },
      },
      h4: {
          fontSize: '1.8rem',
          '@media (min-width: 992px)': {
              fontSize: '2rem',
          },
      },
      h5: {
          fontSize: '1.125rem',
          '@media (min-width: 992px)': {
              fontSize: '1.5rem',
          },
      },
      h6: {
          fontSize: '1rem',
          '@media (min-width: 992px)': {
              fontSize: '1.125rem',
          },
      },
      body1: {
          fontSize: '1.125rem',
      },
      body2: {
          fontSize: '1rem',
      },
      body3: {
        fontSize: '.8rem',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Nav setMode={setMode} mode={mode}/>
        <Stack direction="row" justifyContent="space-between" py={8}>
          <Grid container spacing={2}>
            <Grid item md={3} lg={2} sx={{ display: {xs : "none", md: "block"} }}>
              <Box>
                <Sidebar setMode={setMode} mode={mode}/>
              </Box>
            </Grid>
            <Grid item md={9} lg={10}>
              <Box>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
