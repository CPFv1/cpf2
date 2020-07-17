import React, { useState, useEffect } from 'react'

const Programs = (props: any) => {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    if (props.content.programs) {
      setData(props.content.programs)
    }
  }, [props.content])
  return (
    <section id="testimonials">
      <div className="container wow fadeIn">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Academic Programs</h3>
            <div className="section-title-divider" />
            <p className="section-description">
              Complete list of academic programs supported by CPF
            </p>
          </div>
        </div>

        {data && (
          data.map((item: any, index: number) => {
            return (
              <div className="row mb-4" key={index}>
                <div className="col-md-4 mb-4">
                  <div className="profile">
                    <div className="pic"><img src={item.image ? item.image : "/banner.png"} alt="" /></div>
                    <h4>{item.title}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="quote">
                    <h4 className="text-primary"><i className="fa fa-list" /> {item.content_headline}</h4>
                    <p className="pre-format">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        )}

      </div>
    </section>
  )
}

export default Programs;