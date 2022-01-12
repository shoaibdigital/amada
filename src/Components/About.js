import React, { useEffect, useState } from 'react'

function About() {


    const [data,setData] = useState("")

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };


      useEffect(()=>{
        fetch("http://localhost:1337/api/home?populate[about][populate]=*", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.data.attributes.about))
        .catch(error => console.log('error', error));
      },[])
      
      console.log(data)


    return (
        <div>
            {
                data && data.map((item)=>{
             return  <section key={item.id}>
             <div className="bs-section">
                 <div className="container">
                     <div className="sec-cont">
                         <ul className="bs-chain-info typ-img-lg">
                             <li className="item">
                                 <div className="bs-img-desc">
                                     <div className="left-side">
                                         <h2 className="title">{item.Title}</h2>
                                         <div className="img-wrap">
                                             {/* <img className="lozad" src="assets/images/amada-india-m.jpg"/> */}
                                         </div>
                                         <div className="sec-desc">
                                             
                                             <p>{item.aboutDesc}</p>
                                         </div>
                                         <div className="action-wrap">
                                             <a href="company-overview.shtml" className="bs-btn btn-default">KNOW MORE ABOUT US</a>
                                         </div>
                                     </div>
                                     <div className="right-side">
                                          <div className="img-wrap">
                                                 <img className="lozad" src={`http://localhost:1337${item.aboutImage.data[0].attributes.url}`} />
                                             </div>
                                     </div>
                                 </div>
                             </li>
                          </ul>
                     </div>
                 </div>
             </div>
         </section>
        //  :<section key={item.id}>
        //      <div className="bs-section">
        //          <div className="container">
        //              <div className="sec-cont">
        //                  <ul className="bs-chain-info typ-img-lg">
        //                      <li className="item">
        //                          <div className="bs-img-desc">
        //                              <div className="right-side">
        //                                   <div className="img-wrap">
        //                                          <img className="lozad" src={`http://localhost:1337${item.aboutImage.data[0].attributes.url}`} />
        //                                      </div>
        //                              </div>
        //                          </div>
        //                          <div className="left-side">
        //                                  <h2 className="title">{item.Title}</h2>
        //                                  <div className="img-wrap">
        //                                      {/* <img className="lozad" src="assets/images/amada-india-m.jpg"/> */}
        //                                  </div>
        //                                  <div className="sec-desc">
                                             
        //                                      <p>{item.aboutDesc}</p>
        //                                  </div>
        //                                  <div className="action-wrap">
        //                                      <a href="company-overview.shtml" className="bs-btn btn-default">KNOW MORE ABOUT US</a>
        //                                  </div>
        //                              </div>
        //                      </li>
                            
        //                  </ul>
        //              </div>
        //          </div>
        //      </div>
        //  </section>
 


                })
           
}
        </div>
    )
}

export default About
