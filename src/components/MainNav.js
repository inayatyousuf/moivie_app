import React from 'react';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 const navigate = useNavigate()
  React.useEffect(()=>{
     if(value === 0) navigate('/')
     else if(value === 1) navigate('/movies')
     else if(value ===2) navigate('./search')
    
  },[value, navigate])
  return (
   
      <BottomNavigation
      style={{
        width: '100vw',
        position:'fixed' , 
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        style={{color:'white'}}
        label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction 
         style={{color:'white'}}
        label="Movies" icon={<MovieIcon />} />
       
        <BottomNavigationAction 
         style={{color:'white'}}
        label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
   
  );
}