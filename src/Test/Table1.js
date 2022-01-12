import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Table1() {
    const [data, setData] = useState({});
    // const {id} = useParams()    
  useEffect(() => {
        axios
        .get("https://strapi.amada.ae/products")
        .then((res) => setData(res.data[13].specifications[0]))
        .catch((error) => console.log(error));
  },[]);
  console.log(data)

    return (
      <>
      {
      Object.keys(data).length !== 0 ? 
      <>
      <div className="pd-body">
    <div className="bs-table">
    <div className="table-wrap">
 <table className="table" cellPadding="0" cellSpacing="0">
 <thead>
   <tr>
{
   data.table.map((item)=>{
        return  <th key={item.id} className="t-title">{item.model}</th>   
    })
}
</tr>
</thead>
  </table>
  </div>
  </div>
  </div>
  </> :
    <div>
    <h1>
        Loading...
        </h1>
</div>
} 
  </>

    )
}

export default Table1
