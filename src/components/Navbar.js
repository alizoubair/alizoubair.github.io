const Navbar = ({isExpanded}) => {

    return (
        <nav className={isExpanded}>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href='/#about'>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/#works' aria-current="page">Works</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/#contact'>Contact</a>
                </li>
            </ul>
        </nav>        
    )
}

export default Navbar;