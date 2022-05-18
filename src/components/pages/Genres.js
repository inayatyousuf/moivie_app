import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

function Genres({type,selectedGenres,setSelecedGenres,genres,setGenres,setPage}) {
  

    const handleAdd = (genre) => {
        setSelecedGenres([...selectedGenres, genre])
        setGenres(genres.filter((gen)=>gen.id!== genre.id))
        setPage(1)
    }
  
    const handleRemove = (genre) => {
        setSelecedGenres(selectedGenres.filter((selected)=>selected.id!== genre.id))
        setGenres([...genres, genre])
        setPage(1)
    }
  
    const fetchGenres = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
  setGenres(data.genres)

}
  
  useEffect(()=>{
    fetchGenres()

    return ()=>{
        setGenres({})
    }   //it will cancel the api call (unmount)
  },[])
    return (
    <div style={{padding:'6px 0'}}>
        {selectedGenres && selectedGenres.map((genre) => (
            <Chip label={genre.name}
            key={genre.id}
            size="small"
            color="primary"
            clickable
            onDelete={()=>handleRemove(genre)}
            />
        ))}

        {genres && genres.map((genre) => (
            <Chip label={genre.name}
            key={genre.id}
            size="small"
            color="secondary"
            clickable
            onClick={()=>handleAdd(genre)}
            />
        ))}
    </div>
  )
}

export default Genres