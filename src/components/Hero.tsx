import React, { useEffect } from 'react'
import logo from '../assets/img/cpf_trans.png'
import { SITE_URL } from './Globals';


const Hero = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      let annbtn = document.getElementById('initAnn') as HTMLButtonElement;
      annbtn.click()
    }, 200)
  }, [props.content])
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="wow fadeIn">
          <div className="hero-logo">
            <img src={logo} alt="hero-logo" />
          </div>
          <h1>Center for Positive Futures</h1>
          <h2>Annoucement: <span className="rotating">
            Visit the New CPF website!,
            {props.content && (
              props.content.announcements.map((item: any) => item.announcement).join(",")
            )
            }
          </span></h2>
          <div className="actions">
            <a href={SITE_URL} className="btn-get-started">Visit new Website</a>
            <a href="#about" className="btn-services">Admissions</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;