import React from 'react'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Portfolio</h3>
            <div className="section-title-divider" />
            <p className="section-description">Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="https://www.mountain-forecast.com/system/images/4157/large/Mount-Pulag.jpg?1338012586" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="fa fa-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;