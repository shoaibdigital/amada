import React, { useState } from 'react'



function NewsAndEventsBanner({image}) {




    return (
        <div className="bs-banner typ-sm lozad-background"  style ={{  backgroundImage: "url(" +`https://strapi.amada.ae${image}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
    
    <div className="banner-title-wrap">
        <h2 className="banner-title">News &<span className="cm-line-break">Events</span></h2>
    </div>
    <span className="corner-shape"></span>

</div>
    )
}

export default NewsAndEventsBanner


