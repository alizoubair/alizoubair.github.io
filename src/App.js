import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
        setLoading(true)

        setTimeout(() => {
            setCompleted(true)
        }, 100)
        }, 1500)
    }, [])

    const toggle = () => {
        if (document.body.classList.contains('t-dark')) {
        document.body.classList.remove('t-dark')
        localStorage.removeItem('t-dark')
        } else {
        document.body.classList.add("t-dark")
        localStorage.setItem('t-dark', true)
        }
    }

    return (
        <div className='wrapper'>
            {!completed ? (
                <div>
                    {!loading ? (
                        <div className="container-loading">
                            <div className="stars"></div>
                            <div className="stars2"></div>
                            <div className="stars3"></div>
                            <p className="loading-text" aria-label="loading">
                                <span className="letter" aria-hidden="true">L</span>
                                <span className="letter" aria-hidden="true">o</span>
                                <span className="letter" aria-hidden="true">a</span>
                                <span className="letter" aria-hidden="true">d</span>
                                <span className="letter" aria-hidden="true">i</span>
                                <span className="letter" aria-hidden="true">n</span>
                                <span className="letter" aria-hidden="true">g</span>
                            </p>
                            <div className='dot-flashing'></div>
                        </div>
                    ) : ('')}
                </div>
            ) : (
                <div>
                    <Header />
                    <main>
                        <Home />
                        <About />
                        <Works />
                        <Contact />
                    </main>
                    <Footer themeOff={toggle}/>
                </div>
            )}
        </div>
    );
}

export default App;
