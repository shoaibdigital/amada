import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import axios from "axios";

function Test9({data}) {


    useEffect(() => {
        axios
        .get("https://strapi.amada.ae/products")
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
  },[]);




    return (
        <>
        {
        Object.keys(data).length !== 0 ? 
        <>

       <div className="bs-breadcrum">
           <div className="container">
               <ul className="list">
                   <li className="item"><a href="#" className="link">amada</a></li>
                   <li className="item"><a href="#" className="link">products</a></li>
                   {/* <li className="item"><a href="#" className="link">{data.product_category}</a></li> */}
                   <li className="item">{data.name}</li>
               </ul>
           </div>
       </div>
       <section>
           <div className="bs-section">
               <div className="container">
                   <div className="bs-product-detail">
                       <div className="pd-head">
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
                         <ReactMarkdown className="rich-text">
                           {data.description}
                           </ReactMarkdown>
                   </div>
                   <div className="action-wrap">
                       <a href="assets/doc/VENTIS_catalog.pdf" className="bs-btn btn-default download-btn" target="_blank"><span className="icon icon-download"></span>download brochure</a>
                   </div>
               </div>
           </div>
       </div>
        <div class="bs-features">
        <div class="lyt-features">
            <div class="">
                <h2 class="title">{data.features.heading}</h2>
                <div class="sec-desc">
            {
                 data.features && data.features.featuresSection && data.features.featuresSection.map((item)=>{
                     return (
                         <>
                         <h3 class="sub-title">{item.subTitle}</h3>
                         <ul className="mod-list-circle">
                         {
                            item && item.point &&  item.point.map((points)=>{
                                 return(
                                     <>
                                     <li class="sub-title">{points.point}
                                     <ul className="inside-list">
                                     {
                                        points && points.subPoint.map((dot)=>{
                                               return (
                                                   <>
                                                   <li>{dot.subPoint}</li>
                                                   </>
                                               )
                                         })
                                     } 
                                    </ul>
                                    </li>
                                     </>
                                 )
                             })
                         }
                       </ul>
                         </>
                     )
                })
            }
        </div>
        </div>
        </div>
        </div>
        </div>
                    </div>
                </div>
            </div>
        </section>

 </> :
    <div>
    <h1>
        Loading...
        </h1>
</div>
} 
  </>
    )
}

export default Test9
