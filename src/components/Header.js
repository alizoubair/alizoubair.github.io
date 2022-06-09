import Navbar from "./Navbar";
import { useState } from 'react';


const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header className="site-header">
      <span className="site-logo">
        <a className="link-logo" href="/">AZ</a>
      </span>
      <button className="nav-toggle" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>Menu</button>
      
      <Navbar isExpanded={isNavExpanded ? "nav-primary expanded" : "nav-primary"}/>
    </header>
  )
}

export default Header;