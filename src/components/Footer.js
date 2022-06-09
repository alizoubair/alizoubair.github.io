const Footer = ({themeOff}) => {
  return (
    <footer className="site-footer">
        <div className="social-container">
            <ul className="social-list">
                <li>
                    <a aria-label="github" href="https://github.com/alizoubair">
                        <svg className="feature feature-github" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Github</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a aria-label="linkedin" href="https://linkedin.com/">
                        <svg className="feature feature-linkedin" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-wdith="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Linkedin</title>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>                        
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer-nav">
            <p>
            <div className="user-toggle">
                <span className="label-user-toggle">Choose a theme:</span>
                <button 
                    className="theme-chooser" 
                    onClick={themeOff}>
                    <svg className="mode-toggle-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254 254" role="presentation">
                        <g width="100%" height="100%" fill="currentColor" fillRule="evenodd">
                        <circle cx="127" cy="127" r="45"></circle>
                        <path d="M118 209v-.3a9 9 0 0118 .3v36a9 9 0 11-18 0v-36zM118 9v-.3a9 9 0 0118 .3v36a9 9 0 11-18 0V9zM178.6 191.3l-.2-.1a9 9 0 0113-12.6l25.4 25.5a9 9 0 11-12.7 12.7l-25.5-25.5zM37.2 50l-.2-.3a9 9 0 0113-12.5l25.4 25.5a9 9 0 01-12.7 12.7L37.2 49.9zM209 136h-.3a9 9 0 01.3-18h36a9 9 0 110 18h-36zM9 136h-.3a9 9 0 01.3-18h36a9 9 0 110 18H9zM191.3 75.4l-.1.2a9 9 0 01-12.6-13l25.5-25.4a9 9 0 1112.7 12.7l-25.5 25.5zM50 216.8l-.3.2a9 9 0 01-12.5-13l25.5-25.4a9 9 0 1112.7 12.7l-25.5 25.5z">
                        </path>
                        </g>
                    </svg>

                    <svg className="mode-toggle-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254 254" role="presentation">
                        <g width="100%" height="100%" fill="currentColor" fillRule="evenodd">
                        <path d="M3.6 98.7a127 127 0 01182-84.3 102 102 0 1058.5 163A127 127 0 013.6 98.6z"></path>
                        </g>
                    </svg>
                </button>
            </div>
            </p>
        </div>
        <div className="footer-credit">
            <a href="invlid">
                <div>Disgned and build by Ali Zoubair</div>
            </a>
        </div>
    </footer>
  )
}

export default Footer;