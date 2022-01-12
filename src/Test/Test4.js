import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Test4() {

    const [data, setData] = useState({});

    useEffect(() => {
      axios
        .get("https://strapi.amada.ae/products")
        .then((res) => setData(res.data[11].subFeatures))
        .catch((error) => console.log(error));
    }, []);
  
    console.log(data);

    return (
            <>
            {
                Object.keys(data).length !== 0 ? 
          <>
          {
            data && data.map((item)=>{
              
            })
          }
          </> :
          <div>
          <h1>
              Loading...
              </h1>
      </div>
      } 
        </>
        );
    
}

export default Test4




{/* <div className="bs-breadcrum">
<div className="container">
  <ul className="list">
    <li className="item">
      <a href="#" className="link">
        amada
      </a>
    </li>
    <li className="item">
      <a href="#" className="link">
        Products
      </a>
    </li>
    <li className="item">{data.productCategoryName}</li>
  </ul>
</div>
</div>
<section>
<div className="bs-section sec-first">
  <div className="container">
    <div className="sec-cont">
      <ul className="bs-chain-info typ-listing">
        {data.products && data.products.length > 0 && data.products.map((item) => {
            return  <li className="item" key={item.id}>
                <div className="bs-img-desc">
                  <div className="left-side">
                    <h2 className="title">{item.name}</h2>
                    <div className="img-wrap">
                      <img
                        className="lozad"
                        src={`http://18.221.20.254:1337${item.largeImage.url}`}
                      />
                    </div>
                    <div className="sec-desc">
                      <p>{item.description}</p>
                    </div>
                    <div className="action-wrap">
                      <a
                        href="laser-machines-ventis-aj-product-details.shtml"
                        className="bs-btn btn-default"
                      >
                        know more
                      </a>
                      <button className="bs-btn btn-icon-link download-btn">
                        <span className="icon icon-download"></span>
                        <a
                          href="assets/doc/VENTIS_catalog.pdf"
                          target="_blank"
                        >
                          download brochure
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="img-wrap">
                      <img className="lozad-background" src={`http://18.221.20.254:1337${item.largeImage.url}`}s/>
                    </div>
                  </div>
                </div>
              </li>
          })}
      </ul>
    </div>
  </div>
</div>
</section> */}