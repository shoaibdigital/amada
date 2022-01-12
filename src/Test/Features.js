import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Features() {

    const [data, setData] = useState({});
    // const {id} = useParams()    


  useEffect(() => {
        axios
        .get("https://strapi.amada.ae/products")
        .then((res) => setData(res.data[17]))
        .catch((error) => console.log(error));
  },[]);

  console.log(data)

return (                      
                               <div className="bs-features">
                                    <div className="lyt-features">
                                        <div className="">
                                            {/* <h2 className="title">{data?data.features?data.features.heading}</h2> */}
                                            <div className="sec-desc">
                                                {
                                                    data.features && data.features.featuresSection && data.features.featuresSection.map((item)=>{
                                                      return (
                                                        <>
                                                      <h3 className="sub-title" key={item.id}>{item.subTitle}</h3>
                                                      {  
                                                      item.point.map((points)=>{
                                                             return (
                                                                 <>
                                                                <p>{points.point}</p> 
                                                                <ul className="mod-list-circle">
                                                                 {
                                                                   points.subPoint.map((dot)=>{
                                                                       return <li>{dot.subPoint}</li>
                                                                   })   
                                                                 }   
                                                                </ul>                 
                                                                 </>
                                                             )  
                                                          })
                                                        }
                                                        </>
                                                      )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

)

}


export default Features