import React from 'react'
import { useState } from 'react/cjs/react.development'
import NewsAndEventsAbout from '../Components/NewsAndEventsAbout'
import NewsAndEventsBanner from '../Components/NewsAndEventsBanner'
import axios from 'axios'
import { useEffect } from 'react'

function NewsAndEvents() {

const [data,setData] = useState("")
const [image,setImage] = useState("")
const [info,setInfo] = useState("")

    useEffect(()=>{
        axios.get("https://strapi.amada.ae/news-and-events-page")
        .then(res=>setInfo(res.data)
        )
        .catch(err=> console.log(err))
        },[])
 
console.log(data)
console.log(image)


    return (
        <div>
            <NewsAndEventsBanner image={info.bannerImage?info.bannerImage.url:null}/>
            <NewsAndEventsAbout data={info.newsSection?info.newsSection.news_events:null}/>
        </div>
    )
}

export default NewsAndEvents
