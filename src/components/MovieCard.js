import { Badge } from '@mui/material'
import React from 'react'
import { img_300, unavailable } from '../config'
import './MovieCard.css'
function MovieCard({id, poster, title, date, media_type, rating}) {
  return (
    <div className="movie_card">
      <Badge badgeContent={rating}
            color={rating > 6 ? 'primary' : 'secondary'}
      />
        <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className="subTitle">{media_type==='tv'? "Tv Serial" : "Movie"}
        <span className="subTitle">{date}</span>
        </span>
    </div>
  )
}

export default MovieCard