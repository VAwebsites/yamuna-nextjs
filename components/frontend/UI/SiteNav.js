import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const SiteNav = (props) => {


  return (
    <nav className="navigation " style={{backgroundColor:"#E6E7E2"}}> 
    <div className="container">
    <div className="wrapper">
      <div className="left">
        <a className="brand" href="/" >
          <Image 
              src={props.settings.logo}
              alt="nothing"
              width="150px"
              height="84px"
          />
        </a>
      </div>
      <div className="right">
      <ul className="nav navigation-links animate">
        <li><a href="/" className="scroll siteNav__item" >Home</a></li>
        <li>
            <a  href="/#about" className="scroll siteNav__item" >Overview</a>
        </li>
        <li>
            <a href="/gallery" className="scroll siteNav__item">Gallery</a>
        </li>
        <li>
            <a  href="/posts" className="scroll siteNav__item">Villas</a>
        </li>
        <li>
          <a href="/contact" className="scroll siteNav__item">Contact</a>
        </li>
      </ul>
      <div className="nav-btn">
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
      </div>
    </div>
    </div>
  </nav>
  )
}

export default SiteNav