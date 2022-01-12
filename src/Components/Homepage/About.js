import React from 'react'

function About({info}) {
    return (
        info &&
                <div className="bs-section">
                    <div className="container">
                        <div className="sec-cont">
                            <ul className="bs-chain-info typ-img-lg">
                                {
                                info && info.map((item)=>{
                                   return <li className="item" key={item.id}>
                                    <div className="bs-img-desc">
                                        <div className="left-side">
                                            <h2 className="title">{item.title}</h2>
                                            <div className="img-wrap">
                                                {/* <img className="lozad" style={{
                            backgroundImage:
                              "url(" +
                              `http://18.221.20.254:1337${item.image.url}` +
                              ")"
                          }}/> */}
                          <img className='lozad' src= {`http://18.221.20.254:1337${item.image.url}`}/>
                                            </div>
                                            <div className="sec-desc">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="action-wrap">
                                                <a href={item.buttonUrl} className="bs-btn btn-default">{item.buttonText}</a>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <div className="img-wrap">
                                            <img className='lozad' src= {`http://18.221.20.254:1337${item.image.url}`}/>
                                            </div>
                                        </div>
                                    </div>
                                </li> 
                                 })   
                               
}                              
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default About
