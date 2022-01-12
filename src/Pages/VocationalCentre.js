import React from 'react'
import VocationalCentreAbout from '../Components/VocationalCentreAbout'
import VocationalCentreBanner from '../Components/VocationalCentreBanner'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

function VocationalCentre() {


const [data,setData] = useState("")
const [image,setImage] = useState("")


useEffect(()=>{
    axios.get("http://localhost:8001/data")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    axios.get("http://localhost:8001/banner")
    .then(res => setImage(res.data.image))
    .catch(err => console.log(err))
},[])


return (
        <div>
        <VocationalCentreBanner image={image}/>
        <VocationalCentreAbout data={data} />
        </div>
    )
}

export default VocationalCentre
