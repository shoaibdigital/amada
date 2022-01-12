import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ProductWithFeautres from '../Components/ProductWithFeautres';
import ProductWithPara from '../Components/ProductWithPara';

function ProductDetails() {

    
const [data, setData] = useState({});
const {id} = useParams()

    useEffect(() => {
        axios.get(`https://strapi.amada.ae/products?slug=${id}`)
        .then((res) => setData(res.data[0]))
        .catch((error) => console.log(error));
  },[]);


console.log("productdetails hit")

    return (
        <>
      {
    data.features ?
    <ProductWithFeautres data={data ? data : null} /> : 
    <ProductWithPara data={data ? data : null}/>    
}
</>
    )

}

export default ProductDetails




