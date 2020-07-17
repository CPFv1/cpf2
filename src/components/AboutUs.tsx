import React from 'react'

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

const AboutUs = (props: any) => {
  return (
    <div>
      <Header {...props} />
      <main id="main">
        <About {...props} />
        <Contact {...props} />
      </main>
      <Footer />
      <a href="/#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
    </div>
  )
}

export default AboutUs;