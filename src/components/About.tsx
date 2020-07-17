import React, { useState, useEffect } from 'react'

const About = (props: any) => {

  const [data, setData] = useState([])

  useEffect(() => {
    if (props.content.about) {
      setData(props.content.about)
    }
  }, [props.content])

  return (
    <>
      <section>
        {data && (data.map((item: any, index: any) => {
          return (
            <section className="content-block" key={index}>
              <div className="container wow fadeInUp">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="section-title">{item.title}</h3>
                    <div className="section-title-divider" />
                    <p className="section-description">{item.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="container about-container wow fadeInUp">
                <div className="row">
                  <div className="container about-content">
                    {item.image && (
                      <img src={item.image} alt="about-cpf" className="article-header-image" />

                    )}
                    <hr />
                    <p className={`about-text mb-3 ${item.image ? "" : "text-center"}`}>
                      {item.image ? (item.body) : (
                        <h3 className="py-3">
                          <i className="fa fa-quote-left text-primary pr-2" />{item.body}
                          <i className="fa fa-quote-right text-primary pl-2" />
                        </h3>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )
        }))}
      </section>
    </>
  )
}

export default About;