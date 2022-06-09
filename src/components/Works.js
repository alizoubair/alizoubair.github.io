const Works = () => {
    return (
        <section id="works" className="page-content layout">
            <header className="page-header">
                <h1 className="hed-title heading">Some Work I've Done.</h1>
                <div className="page-intro">
                    <p>Hi, I'm Ali. I'm a software developer, currently studying computer science.</p>
                </div>
            </header>
            <div className="content-main">
                <p>Content Main here ...</p>
            </div>
            <div className="projects-featured">
                <h2 className="hed-label">A few things I've worked on:</h2>
                <ul className="project-list">
                    <li className="project-item">
                        <a className="project--link" href="https://google.com">
                            <figure className="project-thumb">
                                <figcaption className="project--info">PROJECT</figcaption>
                                <img src="/assets/images/work.jpeg" alt=""/>
                            </figure>
                        </a>
                    </li>
                    <li className="project--item">
                        <a className="project--link" href="https://google.com">
                            <figure className="project-thumb">
                                <figcaption className="project--info">PROJECT</figcaption>
                                <img src="/assets/images/work.jpeg" alt=""/>
                            </figure>
                        </a>
                    </li>
                    <li className="project--item">
                        <a className="project--link" href="https://google.com"> 
                            <figure className="project-thumb">
                                <figcaption className="project--info">PROJECT</figcaption>
                                <img src="/assets/images/work.jpeg" alt=""/>
                            </figure>
                        </a>
                    </li>
                    <li className="project--item">
                        <a className="project--link" href="https://google.com">
                            <figure className="project-thumb">
                                <figcaption className="project--info">PROJECT</figcaption>
                                <img src="/assets/images/work.jpeg" alt="" />
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="content-main">
                <p>Actually, I like working on intersting, long-term projects, if that sounds like you, send me an email, I'm looking to forwardto meet you.</p>
            </div>
        </section>
    ) 
}

export default Works;