import { useState } from 'react'
import bannerImg from './assets/banner1.png'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'


function Navbar(){
  return (
    <nav className='navbar'>
      <h1>HangoutHub</h1>
      <div className="nav-buttons-container">
        <button className="nav-buttons">Home</button>
        <button className="nav-buttons">Chats</button>
        <button className="nav-buttons">Feed</button>
        <button className="nav-buttons">Profile</button>
      </div>
    </nav>
  )
}

function Banner(){
  return (
    <div className='banner'>
      <img src={bannerImg} alt="Hero Image" className='hero-image' width="50%"  />
    </div>
  )
}

// function Footer() {
//   return (
//     <footer className="footer">
//       <p> 2024 HangoutHub | All rights reserved.</p>
//       <p>Customer Support | 1122334455</p>
//       <p>English</p>
//     </footer>
//   )
// }

function App() {

  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App;