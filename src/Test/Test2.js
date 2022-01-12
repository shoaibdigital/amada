import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
// import { useParams } from "react-router-dom";

function Test2({data}) {
   
//     const [data, setData] = useState({});
     

useEffect(() => {
    axios
    .get("https://strapi.amada.ae/products")
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
},[]);




//   useEffect(() => {
//         axios
//         .get("https://strapi.amada.ae/products")
//         .then((res) => setData(res.data[13]))
//         .catch((error) => console.log(error));
//   },[]);


// console.log(data)

console.log("Test2")
 return (  
        <>
         {
         Object.keys(data).length !== 0 ? 
         <>
<main>
<div className="main lyt-content js-bg">
    <div className="bs-breadcrum">
        <div className="container">
            <ul className="list">
                <li className="item"><a href="#" className="link">amada</a></li>
                <li className="item"><a href="#" className="link">products</a></li>
                <li className="item"><a href="#" className="link">Laser Machines</a></li>
                <li className="item"></li>
            </ul>
        </div>
    </div>
    <section>
        <div className="bs-section">
            <div className="container">
                <div className="sec-head">
                    <h2 className="sec-title">{data.slug}</h2>
                </div>
                <div className="sec-cont bs-img-desc typ-vertical">
                    <div className="img-wrap">
                        <img className="lozad"  src={`https://strapi.amada.ae${data.largeImage.url}`}/>
                    </div>
                    <p className="sub-title">{data.title}</p>
                    <div className="sec-desc">
                        <p>{data.description}</p>
                    </div>
                    <div className="action-wrap">
                        <a href={`https://strapi.amada.ae${data.brochure.url}`}  className="bs-btn btn-default download-btn" target="_blank"><span className="icon icon-download"></span>download brochure</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section>
        <div className="bs-section">
            <div className="container">
                <div className="sec-cont">
                    <div className="bs-product-detail">
                        <div className="pd-head">
                            <ul className="bs-chain-info">
                                {
                                    data && data.subFeatures && data.subFeatures.length > 0  && 
                                    data.subFeatures.map((item)=>{
                                     return   <li className="item" key={item.id}>
                                    <div className="bs-img-desc">
                                        <div className="left-side">
                                            {
                                                item.subFeaturesPoint[0].image ? 
                                                <div className="img-wrap">
                                                <img className="lozad" src={`https://strapi.amada.ae${item.subFeaturesPoint[0].image.url}`}/>
                                            </div> : null}
                                            <div className="sec-desc">
                                            <p><strong>{item.title}</strong></p>    
                                           <p>
                                               <ReactMarkdown className="rich-text">
                                            {item.subFeaturesPoint[0].description}
                                                {/* <p><strong>{item.title}</strong>{item.subFeaturesPoint[0].description} </p> */}
                                                </ReactMarkdown>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            {
                                                item.subFeaturesPoint[0].image ? 
                                                <div className="img-wrap">
                                                <img className="lozad"  src={`https://strapi.amada.ae${item.subFeaturesPoint[0].image.url}`}/>
                                            </div> : null}

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
        </div>
    </section>
</div>
</main>  </> :
    <div>
    <h1>
        Loading...
        </h1>
</div>
} 
  </>

    )
}

export default Test2


