import React from 'react'
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from '@mui/material';
// import Trending from './components/pages/Trending';
import Movies from './components/pages/Movies';
import Search from './components/pages/Search';
const LazyTrending = React.lazy(()=>import('./components/pages/Trending'))
function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<React.Suspense fallback="Loading Movies">
                <LazyTrending />
                </React.Suspense>} />
              <Route path="/movies" element={<Movies />}/>
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        
        <SimpleBottomNavigation />
      </BrowserRouter>

   
  );
}

export default App;
