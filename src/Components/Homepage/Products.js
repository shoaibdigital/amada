import React from 'react'

function Products({product}) {

let word

    return (
        <>
      
        {product ?
       
    <div className="bs-section sec-first">
    <div className="container">
        <div className="sec-head">
            <h2 className="sec-title">OUR PRODUCTS</h2>
        </div>
        <div className="sec-cont">
            <div className="bs-product-grid">
            <ul className="list">
                  {
                     product.length>0 && product.map((item)=>{
                       return <li className="item" key={item.id}>
                        <div className="bs-prod-card">
                            <a href={`${item.slug}`} className="prod-link"></a>
                            <div className="img-wrap lozad-background"  style={{
                        backgroundImage:
                          "url(" +
                          `https://strapi.amada.ae${item.smallImage.url}` +
                          ")"
                      }}></div>
                            <div className="info-wrap">
                                   { word = item.title.split(" "),
                                   <h3 className="title">{word[0]} <span className="cm-line-break">{word[1]}</span></h3>}
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
    : 
     <div  style={{textAlign: "center", alignItem: "center"}}>
    Loading ...
</div>
        }
      </>
    )
        
}

export default Products
