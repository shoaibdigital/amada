import React from 'react'



function VocationalCentreAbout({data}) {



    return (
        <div className="main lyt-content js-bg">
        <div className="bs-breadcrum">
        <div className="container">
            <ul className="list">
                <li className="item"><a href="#" className="link">amada</a></li>
                <li className="item"><a href="#" className="link">Vocational Center</a></li>
                <li className="item">About</li>
            </ul>
        </div>
    </div>
        <div className="bs-section sec-first">
        <div className="container">
            <div className="sec-cont">
            <ul className="bs-chain-info typ-img-lg">
              {
                  data && data.map((item,index)=>{
                      return <li className='item' key={index}>
                           <div className="bs-img-desc">
                                        <div className="left-side">
                                            <h2 className="title">{item.title}</h2>
                                            {/* <div className="img-wrap">
                                                <img className="lozad" src={img1}/>
                                            </div> */}
                                            <div className="sec-desc">
                                          
                   {item.is? item.desc.info.map((items)=>{
                        return  <ul className="mod-list">
                                <li className="item">{items.in}</li>
                                    </ul> }): <p>{item.desc}</p>
               }                                            
             </div>
                                            
                                        </div>
                                        <div className="right-side">
                                            <div className="img-wrap">
                                                <img className="lozad" src={item.image}/>
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
                </div>
    )
}

export default VocationalCentreAbout
