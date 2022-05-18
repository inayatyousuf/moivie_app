import React from 'react'
import './Header.css'
function Header() {
  return (
   <header onClick={()=>window.scroll(0,0)}>Welcome to Movie Mall</header>
  )
}

export default Header