import React from 'react'

function VocationalCentreBanner({image}) {

// const logo = "./Components/amada-india-m.jpg"


    return (
        <div className="bs-banner typ-sm lozad-background"  style ={{  backgroundImage: "url(" +image + ")",
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'}}>
    }}>
    <div className="banner-title-wrap">
        <h2 className="banner-title">Vocational Center<span className="cm-line-break">About</span></h2>
    </div>
    <span className="corner-shape"></span>

</div>
    )
}

export default VocationalCentreBanner
