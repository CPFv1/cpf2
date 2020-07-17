import React from 'react'

import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Programs from './Programs';

const AcademicPrograms = (props: any) => {
  return (
    <div>
      <Header {...props} />
      <main id="main">
        <Programs {...props} />
        <Contact {...props} />
      </main>
      <Footer />
      <a href="/#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
    </div>
  )
}

export default AcademicPrograms;