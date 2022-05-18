// import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { SettingsInputAntennaOutlined } from '@mui/icons-material';

// export default function BasicSelect(props) {
//   const [sortType, setSortType] = React.useState('');
//   const [content, setContent] = React.useState(props.title)
//   const handleChange = (event) => {
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



//   }

//   return (
    
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Sort</InputLabel>
//         <Select style={{color:"white"}}
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={sortType}
//           label="Sort"
//           onChange={handleChange}
//         >
//           <MenuItem value={"ASC"}>Ascending</MenuItem>
//           <MenuItem value={'DSC'}>Descending</MenuItem>
//         </Select>
//       </FormControl>
   
//   );
// }