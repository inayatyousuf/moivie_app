import React, {useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../MovieCard'
import './Trending.css'
import PaginationComp from '../PaginationComp'
// import Sort from './Sort'

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { SettingsInputAntennaOutlined } from '@mui/icons-material';
function Trending() {
   const [content, setContent] = useState([])
   const [page, setPage] = useState(1)
    // const [sortType, setSortType] = useState('')
   
    const fetchTrending = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MY_KEY}&page=${page}`);
     setContent(data.results)
    
}
//sort
// const handleChange = (event) => {
//     setSortType(event.target.value);
//     setContent((content) => [...content].sort((a, b) => {
//         let condition = 0
//         if (a.title && b.title) {
//             condition =  a.title.toLowerCase() > b.title.toLowerCase();
//         } else {
//             return 0
//         }
//         return condition ? 1 : -1
    
//     }));
// }

//useeffect
    useEffect(()=>{
        fetchTrending()
    },[page,content])

  return (<>
    <span className="page_title"> Popular</span>
    
        <div className="trending">
        {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select style={{color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={"ASC"}>Sort In Order</MenuItem>
          {/* <MenuItem value={'DSC'}>Descending</MenuItem> */}
        {/* </Select>
      </FormControl> */} 
            {
                content && content.map(item => (
                    <MovieCard key={item.id} 
                               id={item.id}
                               poster={item.poster_path}
                               title={item.title || item.name}
                               date={item.first_air_date || item.release_date}
                               media_type={item.media_type}
                               rating={item.vote_average}
                    />
                 ) )
            }
        </div>
       <PaginationComp setPage={setPage}/>
 
  </>)
}

export default Trending