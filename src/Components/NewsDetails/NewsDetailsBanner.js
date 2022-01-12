import React from 'react'

function NewsDetailsBanner() {
    
    return (
        <div className="bs-banner typ-sm lozad-background" style={{ backgroundImage:"url(" + `https://frontend.amadaindia.co.in/uploads/banner1_67574b1b02.jpg` + ")" }} >
        <div className="banner-title-wrap">
            <h2 className="banner-title">IMTEX Forming <span className="cm-line-break">2020</span></h2>
            <p className="banner-sub-title">Stall Layout @ IMTEX 2020</p>
        </div>
        <span className="corner-shape"></span>
    </div>
    )
}

export default NewsDetailsBanner