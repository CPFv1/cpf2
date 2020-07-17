import React, { useState, useEffect } from 'react'
import { slug, SITE_URL } from './Globals';



const News = (props: any) => {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    if (props.content.news) {
      let newsData = props.content.news.reverse()
      setData(newsData)
    }
  }, [props.content])

  return (
    <section id="about">
      {data && data.length !== 0 && (
        <>
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Latest News</h3>
                <div className="section-title-divider" />
                <p className="section-description">
                  Get updated with the lastest news from different branches of CPF.
              </p>
              </div>
            </div>
          </div>
          <div className="container about-container wow fadeInUp">

            <div className="row">
              <div className="col-lg-6 about-img">
                <img src={data[0].featured_image} alt="about-img" />
              </div>
              <div className="col-md-6 about-content">
                <h2 className="about-title">{data[0].title.length <= 66 ? data[0].title : (data[0].title.substring(0, 65) + "...")}</h2>
                <p className="about-text">
                  {data[0].body.substring(0, 430)}...
                </p>

                <a href={`${SITE_URL}/article/${slug(data[0].title)}`}>
                  <button className="btn-action mt-3">
                    CONTINUE READING <i className="fa fa-chevron-right ml-2" />
                  </button>
                </a>

              </div>
            </div>

            {data.length > 1 && (
              <>
                <hr />
                <h4><i className="fa fa-bars" /> Other stories</h4>
                <div className="row mt-4 story-thread">

                  {data.slice(1, 4).map((story: any, i: number) => {
                    return (
                      <div className="col-md-4 d-flex flex-column story-card">
                        <a href={`/article/${slug(story.title)}`}>
                          <img src={story.featured_image} className="mb-2" />
                          <div className="d-flex">
                            <span className="story-count mr-2">0{i + 1}</span>
                            <div className="d-flex flex-column">
                              <span>
                                <strong>
                                  {
                                    story.title.length <= 66 ? story.title : (story.title.substring(0, 65) + "...")
                                  }
                                </strong>
                              </span>
                              <small>{story.body.substring(0, 50)}...</small>
                            </div>
                          </div>
                          <small className="read-more">Read full article</small>
                        </a>
                      </div>
                    )
                  })}

                </div>
              </>
            )}

          </div>
        </>
      )}
    </section>
  )
}

export default News;