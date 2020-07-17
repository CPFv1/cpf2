import React, { useState, useEffect } from 'react'

import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import { slug, sectionData } from './Globals'
import moment from 'moment'

const Article = (props: any) => {



  const [data, setData] = useState<any>([])

  let params = props.match.params

  const [mainStory, setMain] = useState<any>({})

  useEffect(() => {
    if (props.content.news) {
      let newsData = props.content.news.reverse()
      setData(newsData)

      let focus = newsData.find((x: any) => slug(x.title) === slug(params.slug))
      console.log(focus)
      setMain(focus)
    }
  }, [props.content, params.slug])

  const Section = (props: any) => {
    return (
      <div className="row mb-5">
        <div className="col-lg-6 about-img">
          <img src={props.data.image} alt="about-cpf" />
        </div>
        <div className="col-md-6 about-content">
          <p className="about-text">
            {props.data.text}
          </p>
        </div>
      </div>
    )
  }


  return (
    <div>
      <Header {...props} />
      <main id="main">

        <section id="about">
          <div className="container about-container wow fadeIn">

            {mainStory && (
              <div className="row">

                <div className="container about-content">
                  <h1 className="about-title article-title">{mainStory.title}</h1>

                  <p><i className="fa fa-circle text-primary" /> {mainStory.date ? moment(mainStory.date).format('MMMM D, YYYY') : ""}</p>

                  <img src={mainStory.featured_image} className="article-header-image" />


                  <hr />
                  <p className="about-text mb-3">
                    {mainStory.body}
                  </p>

                  {
                    mainStory.section && (
                      sectionData(mainStory.section).map((sdata: any) => {
                        return (<Section data={sdata} />)
                      })
                    )
                  }



                  <p className="about-text mb-3">
                    {mainStory.footer}
                  </p>




                </div>
              </div>
            )}

            {data.length > 1 ? (
              <>
                {params.slug === "all" && (
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">All News</h3>
                      <div className="section-title-divider" />
                      <p className="section-description">
                        List of all articles from Center for Positive Futures
                      </p>
                    </div>
                  </div>
                )}
                <hr />
                <h4><i className="fa fa-bars" /> All stories</h4>
                <div className="row mt-4 story-thread">

                  {data.filter((x: any) => slug(x.title) !== slug(params.slug)).map((story: any, i: number) => {
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
            ) : (
                params.slug === "all" && data.length === 1 && (
                  <>
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="section-title">All News</h3>
                        <div className="section-title-divider" />
                        <p className="section-description">
                          List of all articles from Center for Positive Futures
                    </p>
                      </div>
                    </div>

                    <hr />
                    <h4><i className="fa fa-bars" /> All stories</h4>
                    <div className="row mt-4 story-thread">

                      {data.filter((x: any) => slug(x.title) !== slug(params.slug)).map((story: any, i: number) => {
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
                )
              )}





          </div>
        </section>



        <Contact {...props} />
      </main>
      <Footer />
      <a href="/#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
    </div>
  )
}

export default Article;