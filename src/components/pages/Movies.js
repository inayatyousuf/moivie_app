import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaginationComp from '../PaginationComp'
import MovieCard from '../MovieCard'
import Genres from './Genres'
import useGenres from './useGenres'
import Search from './Search'
function Movies() {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [noOfPages, setNoOfPages] = useState()
 const[selectedGenres, setSelecedGenres]=useState([])
 const [genres,setGenres] = useState([])

  const genreforURL = useGenres(selectedGenres)
  const fetchMovies = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`)
  setContent(data.results)
  setNoOfPages(data.total_pages)
  }

  useEffect(()=>{
    fetchMovies()
  },[page, genreforURL])
  return (<>
   <Search />
    <div className="page_title">Movies</div>
    <Genres type='movie'
            selectedGenres={selectedGenres}
            setSelecedGenres={setSelecedGenres}
            genres={genres}       
            setGenres={setGenres}
            setPage={setPage}
      />
    <div className="trending">
     
            {
                content && content.map(item => (
                    <MovieCard key={item.id} 
                               id={item.id}
                               poster={item.poster_path}
                               title={item.title || item.name}
                               date={item.first_air_date || item.release_date}
                               media_type='movie'
                               rating={item.vote_average}
                    />
                 ) )
            }
        </div>
       <PaginationComp setPage={setPage} noOfPages={noOfPages}/>

 </> )
}

export default Movies