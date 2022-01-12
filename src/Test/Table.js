import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Table() {

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
            <h3 className="title">{data.heading}</h3>
                    <div className="table-wrap">
                        <table className="table" cellPadding="0" cellSpacing="0">
                            <thead>
                                <tr>
                                <th className="t-title">MODEL</th>
                                {
                                    data && data.table && data.table.map((item)=>{
                                       return(
                                           <>
                                            <th key={item.id} className="t-title">{item.model}</th>
                                           </>
                                       ) 
                                      
                                    })
                                }
                                </tr>
                            </thead>
                         <tbody>
                                     <tr>
                                     {
                                         data && data.table && data.table.map((item)=>{
                                               return item.tableData.map((points)=>{
                                               return (
                                                   <>
                                                <td className="t-desc">{points.fieldName}</td>
                                                <td className="t-desc">{points.data}</td>
                                                <td className="t-desc">{points.data}</td>
                                                   </>
                                               ) 
                                               })
                                         })
                                     }
                                         </tr>
                                         {/* <td className="t-desc">Rated Laser Power</td>
                                         <td className="t-desc">4000W</td>
                                        <td className="t-desc">4000W</td>
                                                
                                                    <tr>
                                                        <td className="t-desc">Oscillator</td>
                                                        <td className="t-desc">LD excited Yb fiber</td>
                                                        <td className="t-desc">LD excited Yb fiber</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Processing Dimension X x Y x Z <span className="cm-bold">(mm)</span></td>
                                                        <td className="t-desc">3070×1550×100</td>
                                                        <td className="t-desc">4070×2050×100</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Axis control method</td>
                                                        <td className="t-desc">X, Y, Z axes (simultaneous controller)</td>
                                                        <td className="t-desc">X, Y, Z axes (simultaneous controller)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc"> Maximum rapid feed rate X : Y : Z <span className="cm-bold">(m/min)</span></td>
                                                        <td className="t-desc">120：120：80</td>
                                                        <td className="t-desc">120：120：80</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Material Thickness <span className="cm-bold">(mm)</span></td>
                                                        <td className="t-desc"></td>
                                                        <td className="t-desc"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Mild steel</td>
                                                        <td className="t-desc">25</td>
                                                        <td className="t-desc">25</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Stainless steel</td>
                                                        <td className="t-desc">20</td>
                                                        <td className="t-desc">20</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Aluminium</td>
                                                        <td className="t-desc">16</td>
                                                        <td className="t-desc">16</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Brass</td>
                                                        <td className="t-desc">10</td>
                                                        <td className="t-desc">10</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="t-desc">Copper</td>
                                                        <td className="t-desc">10</td>
                                                        <td className="t-desc">10</td>
                                                    </tr> */}
                                                </tbody>
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
  
  export default Table



//   <table>
// <thead>
// <tr>
// <tbody/>
// </tr>
// </thead>
//  <table/>