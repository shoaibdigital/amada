import React from 'react'

function ProductsHomePageBanner({data}) {

let word

    return (
        <>
        {
          Object.keys(data).length !== 0  ?   
        <div className="bs-banner typ-sm lozad-background" style={{ backgroundImage: `url(https://strapi.amada.ae${data.largeImage.url})` }} >
        <div className="banner-title-wrap">
            {
                word = data.title.split(" "),
            <h2 className="banner-title">{word[0]} <span className="cm-line-break">{word[1]}</span></h2>
            }       
            </div>
        <span className="corner-shape"></span>
    </div>  :
    <></>      
}
    </>
    )
}

export default ProductsHomePageBanner
