import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Navbar() {

    const[data,setData] = useState()

    useEffect(()=>{
        axios.get("https://strapi.amada.ae/global")
        .then(res => setData(res.data.header.menu))
        .catch(err => console.log(err))
    },[])

    console.log(data)

    return (
        data && data.length !== 0 ?
        <>
        <div className="bs-header typ-solid">
             <a href="index.shtml" className="logo-wrap">
                {/* <img src={require("../assets/images/logo-white.png")} alt="Company Logo" title="Amada Company Logo"/> */}
                <img src={require("./assets/images/logo.png")} alt="Company Logo" title="Amada Company Logo"/>
            </a>
            <div className="bs-nav">
            <button className="nav-btn btn-close js-nav-close"><span className="icon icon-close"></span></button>    
            <ul className="nav-list">
          { 
             data && data.length > 0 && data.map((item)=>{
               return <li className={`nav-item  ${item.subMenu.length > 0 ? "bs-sub-menu" : "" } ${item.subMenu.length > 5 ? "typ-mega-menu" : ""} `} > 
                <a href="index.shtml" className="nav-link">{item.menuName}</a>
                {
                    item.subMenu.length > 0 ? 
                    <div className="menu-wrap mb-sub-menu-body">
                    <ul className="quicklink-item-wrap top">
                    <li className="quicklink-item">
                    <div className="mod-quicklink">    
                    {
                        item && item.subMenu && item.subMenu.map((list)=>{
                        return (
                               list && list.subMenuLink.length > 0 ?
                                <>
                                <h2 className="title mb-accord-title">
                                <a href="laser-machines.shtml">{ list.subMenu}</a></h2>
                                 <ul className="wrap mb-accord-body">
                                     {
                                         list.subMenuLink.map((link)=>{
                                            return( 
                                            <li className="item">
                                            <a href="laser-machines-ventis-aj-product-details.shtml" className="link">{link.subMenuLink}</a>
                                             </li>
                                            )
                                         })
                                     }
                                 </ul>
                                </>:
                                 <>
                                <ul className="wrap">
                                <li className="item"><a href="company-overview.shtml" className="title">{list.subMenu}</a></li>
                                </ul>
                                </>                      
                           )                                       
                        })
                    } 
                    </div>  
                    </li> 
                    </ul>    
                    </div> : null
                }
                 </li>
             })               
}
            </ul>
            </div> 
            <div className="bs-side-nav">
        <ul className="nav-list">
            <li className="nav-item hidden-xs">
                <div className="mod-social-links">
                    <a href="#" className="icon icon-youtube"><img src={require("./assets/images/youtube.svg")}/></a>
                    <a href="#" className="icon icon-linkedin-o"><img src={require("./assets/images/linkedin.svg")}/></a>
                </div>
            </li>
            <li className="nav-item">
                <a href="https://www.amada.com/" target="_blank" className="nav-link"><span className="text">ae</span><span className="icon icon-globe"></span></a>
            </li>
            {/* <!-- <li class="nav-item">
                <a href="#" class="nav-link"><span class="icon icon-search"></span></a>
            </li> --> */}
            <li class="nav-item">
                <div class="menu-btn js-menu-open">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </li>
        </ul>
    </div>
            </div>

            </> : 
            <div>
                <h1>Loading....</h1>
            </div>
    )
}

export default Navbar





