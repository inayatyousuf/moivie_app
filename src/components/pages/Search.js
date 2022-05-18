import { ThemeProvider } from '@emotion/react'
import { Button, createTheme, TextField } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import MovieCard from '../MovieCard';
import PaginationComp from '../PaginationComp';


function Search() {
  const [type, setType] = useState(0)
  const [searchFilm , setSearchFilm] = useState('')
  const [content, setContent] = useState()
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState()
  const darkTheme = createTheme({
    palette :{
        type:'dark',
        primary:{
          main:'#fff'
        },
      }
  })

  const fetchSearch = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
      process.env.REACT_APP_MY_KEY
    }&language=en-US&query=${searchFilm}&page=${page}&include_adult=false`)
   
    setContent(data.results)
    setNoOfPages(data.total_pages)
   
  }

  useEffect(()=>{
    window.scroll(0,0)
    fetchSearch()

  },[page])

  return (
    <div>
  <ThemeProvider theme={darkTheme}> 
  <div style={{display:'flex', margin: '10px 0'}}>
      <TextField  
        style={{flex:1}}
        className="searchBox"
        label="Search"
        variant='filled'
        onChange={(e)=>  setSearchFilm(e.target.value)}
      />
      <Button variant='contained' 
      style={{marginLeft:10}}
      onClick={fetchSearch}
     >
        <SearchIcon />
      </Button>
   </div>
</ThemeProvider>
  
<div className="trending">
        {content &&
          content.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={item.vote_average}
            />
          ))}
        {searchFilm &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2></h2>)
          }
        {/* {searchFilm && <h2>No such movie</h2>} */}

          
      </div>
      {noOfPages > 1 && (
       
     <PaginationComp setPage={setPage} numOfPages={noOfPages} />
      )}
    </div>


    
    
 )
}

export default Search