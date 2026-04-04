import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import bannerImg from './assets/banner1.png'
import './App.css'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Feed from './pages/Feed'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'


function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className='navbar'>
      <h1 onClick={() => navigate('/')} style={{cursor: 'pointer'}}>HangoutHub</h1>
      <div className="nav-buttons-container">
        <Link to="/"><button className="nav-buttons">Home</button></Link>
        <Link to="/explore"><button className="nav-buttons">Explore</button></Link>
        <Link to="/feed"><button className="nav-buttons">Feed</button></Link>
        <Link to="/signup"><button className="nav-buttons">SignUp</button></Link>
      </div>
    </nav>
  )
}

function Banner() {
  return (
    <div className='banner'>
      <img src={bannerImg} alt="Hero Image" className='hero-image' width="50%" />
    </div>
  )
}

function App() {

  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div className="main-content" style={{minHeight: '80vh', padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;