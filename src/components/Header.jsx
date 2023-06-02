import React from 'react'

function Header() {
  return <nav>
    <NavContent></NavContent>
  </nav>
};

const  NavContent=()=>{
    <>
        <h2>Akhil Binoy</h2>
        <div>
            <a href="#home"> Home </a>
            <a href="#work"> Work </a>
            <a href="#timeline"> Experience </a>
            <a href="#services"> Services </a>
            <a href="#testimonial"> Testimonial </a>
            <a href="#contact"> Contact </a>
        </div>
        <a href="mailto:official.akhil888binoy@gmail.com">
            <button>Email</button>
        </a>
    
    </>
}

export default Header