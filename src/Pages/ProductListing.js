import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsHomepage from "../Components/ProductsHomepage";
import ProductsHomePageBanner from "../Components/ProductsHomePageBanner";
import { useParams } from "react-router-dom";

function ProductListing() {


  const [data, setData] = useState({});
  const {slug} = useParams()



  useEffect(() => {
    axios.get(`https://strapi.amada.ae/product-categories?slug=${slug}`)
      .then((res) => setData(res.data[0]))
      .catch((error) => console.log(error));
  },[]);

  console.log("ListingProduct",data);


// useEffect(()=>{
// console.log("hello")
// },[])



  return (
    <>
      {
    data && (
      <div >
          <ProductsHomePageBanner data={data ? data : null}/>
        <ProductsHomepage data={data? data : null} />
      </div>
    )
}
</>
  );
}

export default ProductListing;
