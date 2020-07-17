import React from 'react'

const Footer = () => {
  return (
    <>
      <div id="googleMap" />
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                © Copyright <strong>Center for Positive Futures, Inc</strong>. All Rights Reserved
        </div>
              <div className="credits">
                {/* Designed by <a target="_blank" href="https://github.com/quadroloop" rel="noopener noreferrer">Bryce Mercines</a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;