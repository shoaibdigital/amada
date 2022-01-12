import React, { useState } from 'react'


function NewsAndEventsAbout({data}) {



    return (
        <div className="main lyt-content js-bg">
            <div className="bs-breadcrum">
                <div className="container">
                    <ul className="list">
                        <li className="item"><a href="#" className="link">amada</a></li>
                        <li className="item">News & Events</li>
                    </ul>
                </div>
            </div>
            <section>
                <div className="bs-section">
                    <div className="container">
                        <div className="sec-cont">
                            <div className="bs-event-card">
                                <ul className="list">
                                {
                                data && data.map((item)=>{
                                   return <li className="item" key={item.id}>
                                    <div className="bs-img-overlay">
                                        <div className="img-wrap bs-news lozad-background"   style ={{  backgroundImage: "url(" +`https://strapi.amada.ae${item.smallImage.url}` + ")" }}                                            >
                                            <a href={item.isLinkedin? item.url : null} target="_blank" className="news-link"></a>
                                            <span className="icon icon-linkedin"></span>
                                            <div className="news-info">
                                                <div className="date">{item.subtitle}</div>
                                                <p className="desc">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                })
                            }
                                 
                                    {/* <li className="item">
                                        <div className="bs-img-overlay">
                                            <div className="img-wrap bs-news lozad-background" data-background-image="assets/images/linkdin/linkdin2.jpg">
                                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6828931399555391488" target="_blank" className="news-link"></a>
                                                <span className="icon icon-linkedin"></span>
                                                <div className="news-info">
                                                    <time datetime="2020-08" className="date">August 2021</time>
                                                    <p className="desc">AIR-CUT Mild Steel</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="bs-img-overlay">
                                            <div className="img-wrap bs-news lozad-background" data-background-image="assets/images/linkdin/linkdin3.jpg">
                                                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6827895117844766720" target="_blank" className="news-link"></a>
                                                <span className="icon icon-linkedin"></span>
                                                <div className="news-info">
                                                    <time datetime="2020-08" className="date">August 2021</time>
                                                    <p className="desc">9kW Fiber Laser machine ENSIS3015AJ</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="bs-prod-card">
                                            <a href="imtexformingevent2016.shtml" className="prod-link"></a>
                                            <div className="img-wrap lozad-background" data-background-image="assets/images/news/imt2016.jpg"></div>
                                            <div className="info-wrap">
                                                <h3 className="title">IMTEX <span className="cm-line-break">Forming 2016</span></h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="bs-prod-card">
                                            <a href="imtexformingevent2018.shtml" className="prod-link"></a>
                                            <div className="img-wrap lozad-background" data-background-image="assets/images/news/imt2018.jpg"></div>
                                            <div className="info-wrap">
                                                <h3 className="title">IMTEX <span className="cm-line-break">Forming 2018</span></h3>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <div className="bs-prod-card">
                                            <a href="imtex2020detail.shtml" className="prod-link"></a>
                                            <div className="img-wrap lozad-background" data-background-image="assets/images/news/imt2020.jpg"></div>
                                            <div className="info-wrap">
                                                <h3 className="title">IMTEX <span className="cm-line-break">Forming 2020</span></h3>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default NewsAndEventsAbout




                           
      
 

  



