import React from "react";

function ProductsHomepage({ data }) {
  return (
      <>
      {
          Object.keys(data).length !== 0 ? 
    <>
      <div className="bs-breadcrum">
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
            <li className="item">{data.title}</li>
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
                                src={`https://strapi.amada.ae${item.largeImage.url}`}
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
                               {
                              item.brochure ?
                               <a
                                  href={`https://strapi.amada.ae${item.brochure.url}`}
                                  target="_blank"
                                >
                               
                                  download brochure
                                </a> : null
                }
                              </button>
                            </div>
                          </div>
                          <div className="right-side">
                            <div className="img-wrap">
                              <img className="lozad-background" src={`https://strapi.amada.ae${item.largeImage.url}`}/>
                            </div>
                          </div>
                        </div>
                      </li>
                  })}
              </ul>
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
  );
}

export default ProductsHomepage;
