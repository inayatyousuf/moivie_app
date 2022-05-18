import { Pagination } from '@mui/material'
import React from 'react'

function PaginationComp({setPage,noOfPages=10}) {
    const handlePageMove = (page) =>{
        setPage(page);
        window.scroll(0,0)
    }
  return (
    <div style={{ 
                display:'flex', 
                justifyContent:"center",
                marginTop:'2rem',
                marginBottom:"1rem",
                color: "white"
                }}>
        <Pagination
            color="primary"
            count= {noOfPages}
            hideNextButton
            hidePrevButton
            onChange={(e)=>{handlePageMove(e.target.textContent)}} 
        />
    </div>
  )
}

export default PaginationComp