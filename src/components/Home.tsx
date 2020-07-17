import React, { useEffect } from 'react'

import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Admissions from './Admissions';
import Contact from './Contact';
import News from './News';


const Home = (props: any) => {


  useEffect(() => {


  }, [])

  return (
    <div>
      <Hero {...props} />
      <Header {...props} page="home" />

      <main id="main">

        <News {...props} />
        <Admissions {...props} />
        <Contact {...props} />

      </main>

      <Footer />
      <a href="/#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
    </div>
  )
}

export default Home;