import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from "swiper";
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { useState } from 'react';


function NewsDetails() {

    const [data, setData] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
      axios
        .get("https://frontend.amadaindia.co.in/news-events-details")
        .then((res) => setData(res.data[3].gallery))
        .catch((err) => console.log(err));
    }, []);



    const params = {
        style: {
          height: "550px",
        },
        modules: [Navigation,Pagination, Autoplay,Thumbs],
        pagination: { clickable: true },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: true,
        },
        thumbs:{
            swiper: thumbsSwiper 
        } 
      };

      const params2 ={
        modules:[Thumbs],
        watchSlidesProgress:true,
        onSwiper:setThumbsSwiper
      } 


      console.log(data)

    return (

data &&

        <div className="main lyt-content js-bg">
        <div className="bs-breadcrum">
            <div className="container">
                <ul className="list">
                    <li className="item"><a href="#" className="link">amada</a></li>
                    <li className="item"><a href="#" className="link">News & Events</a></li>
                    <li className="item">IMTEX Forming 2020</li>
                </ul>
            </div>
        </div>
        <section>
            <div className="bs-section">
                <div className="container">
                    <div className="bs-blog-detail">
                        <div className="bd-head">
                            <h2 className="bd-title">Gallery</h2>
                        </div>
                        <div className="bd-body">
                            <div className="bs-gallery">
                                <div className="gallery-head">
                                    <Swiper {...params} >
                                    {
                                        data && data.map((item)=>{
                                       return  <SwiperSlide className='lozad-background' key={item.id}  style={{ backgroundImage:"url(" + `https://frontend.amadaindia.co.in/${item.image[0].url}` + ")" }}>
                                            </SwiperSlide>
                                        })
                                          
}
                                    </Swiper>
                                </div>
                                <div className="gallery-footer">
                                    <Swiper {...params2}>
                                        {
                                            data && data.map((item)=>{
                                               return <SwiperSlide className='lozad-background' key={item.id} style={{ backgroundImage:"url(" + `https://frontend.amadaindia.co.in/${item.image[0].formats.thumbnail.url}` + ")" }}   >
                                                   </SwiperSlide>
                                            })
                                          
}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default NewsDetails



