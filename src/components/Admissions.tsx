import React, { useState, useEffect } from 'react'


const Admissions = (props: any) => {

  const [data, setData] = useState([])

  useEffect(() => {
    if (props.content.admissions) {
      setData(props.content.admissions)
    }
  }, [props.content])

  return (
    <section id="admissions">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Admissions</h3>
            <div className="section-title-divider" />
            <p className="section-description">Student Admission Details</p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">

          <div className="service-item">
            <div className="service-icon"><i className="fa fa-list" /></div>
            <h4 className="service-title"><a href="/#">Requirements</a></h4>
            {data && (
              data.filter((item: any) => item.category === 'requirements')
                .map((step: any, index: number) => {
                  return (
                    <p className="service-description" key={index}>
                      {step.content}
                      <br />

                      {step.link && (
                        <a href={step.link} >
                          <button className="btn-action mt-3">
                            {step.link_text} <i className="fa fa-chevron-right ml-2" />
                          </button>
                        </a>
                      )}

                    </p>
                  );
                }))}
          </div>
          <div className="service-item">
            <div className="service-icon"><i className="fa fa-users" /></div>
            <h4 className="service-title"><a href="/#">Students</a></h4>
            {data && (
              data.filter((item: any) => item.category === 'students')
                .map((step: any, index: number) => {
                  return (
                    <p className="service-description" key={index}>
                      {step.content}
                      <br />

                      {step.link && (
                        <a href={step.link} >
                          <button className="btn-action mt-3">
                            {step.link_text} <i className="fa fa-chevron-right ml-2" />
                          </button>
                        </a>
                      )}

                    </p>
                  );
                }))}
          </div>


          <div className="service-item">
            <div className="service-icon"><i className="fa fa-users" /></div>
            <h4 className="service-title"><a href="/#">Junior Highschool</a></h4>
            {data && (
              data.filter((item: any) => item.category === 'junior high')
                .map((step: any, index: number) => {
                  return (
                    <p className="service-description" key={index}>
                      {step.content}

                      <br />

                      {step.link && (
                        <a href={step.link} >
                          <button className="btn-action mt-3">
                            {step.link_text} <i className="fa fa-chevron-right ml-2" />
                          </button>
                        </a>
                      )}

                    </p>
                  );
                }))}
          </div>

          <div className="service-item">
            <div className="service-icon"><i className="fa fa-users" /></div>
            <h4 className="service-title"><a href="/#">Senior Highschool</a></h4>
            {data && (
              data.filter((item: any) => item.category === 'senior high')
                .map((step: any, index: number) => {
                  return (
                    <p className="service-description" key={index}>
                      {step.content}

                      <br />

                      {step.link && (
                        <a href={step.link} >
                          <button className="btn-action mt-3">
                            {step.link_text} <i className="fa fa-chevron-right ml-2" />
                          </button>
                        </a>
                      )}

                    </p>
                  );
                }))}
          </div>




        </div>

      </div>
    </section>

  )
}

export default Admissions;