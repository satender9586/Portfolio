import React,{useState} from 'react';
import "./Header.css";
import logo from "../pic/logo.png"

const Header = () => {
    window.addEventListener("scroll", function(){
        const header= document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    const[Mobile, setMobile]= useState(false)

  return (
    <>
        <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='image'></img>
                    </div>
                    <div className='navlink'>
                       
                        <ul className={Mobile ? "nva-links-mobile": "link f_flex uppercase"} onClick={()=> setMobile(false)}>
                            <li><a href='#home'>home</a></li>
                            <li><a href='#featires'>Features</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#resume'>Resume</a></li>
                            <li><a href='#contact'>contact</a></li>
                           
                            <li><button className='home-btn'>BUY NOW</button></li>
                            
                        </ul>
                        <button className='toggle' onClick={()=> setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> :  <i className='fas fa-bars open '></i>}
                        </button>
                    </div>
                </div>
        </header>
       
    </>
  )
}

export default Header
