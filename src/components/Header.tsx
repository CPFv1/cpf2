import React, { useEffect, useState } from 'react'

import logo from '../assets/img/cpf_trans.png'
import { SITE_URL } from './Globals';


const Header = (props: any) => {


  const [prefix, setPrefix] = useState("#")

  useEffect(() => {
    if (props.page !== "home") {
      setPrefix("/#")
    }
  }, [props.page])

  return (
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <a href="/">
            <h1><img src={logo} alt="nav-logo" />CPF</h1>
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href={`${SITE_URL}/article/all`}>News</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href={`${SITE_URL}/programs`}>Academic Programs</a>
            </li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        {/* #nav-menu-container */}
      </div>
    </header >
  )
}

export default Header;