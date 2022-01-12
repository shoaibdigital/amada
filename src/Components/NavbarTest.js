import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Navbar() {

const[data,setData] = useState()

useEffect(()=>{
    axios.get("https://strapi.amada.ae/global")
    .then(res => console.log(res.data.header.menu))
    .catch(err => console.log(err))
},[])

return (
        <div className="bs-header typ-solid">
            <a href="index.shtml" className="logo-wrap">
                <img src="assets/images/logo-white.png" alt="Company Logo" title="Amada Company Logo"/>
            </a>
            <div className="bs-nav">
                <button className="nav-btn btn-close js-nav-close"><span className="icon icon-close"></span></button>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="index.shtml" className="nav-link">home</a>
                    </li>
                    <li className="nav-item bs-sub-menu">
                        <a href="#" className="nav-link mb-sub-menu-title">Company Profile</a>
                        <div className="menu-wrap mb-sub-menu-body">
                            <ul className="quicklink-item-wrap top">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <ul className="wrap">
                                            <li className="item">
                                                <a href="company-overview.shtml" className="title">Introduction</a>
                                            </li>
                                            <li className="item">
                                                <a href="presidents-message.shtml" className="title">Presidents Message</a>
                                            </li>
                                            <li className="item">
                                                <a href="corporate-video.shtml" className="title">Corporate Video</a>
                                            </li>
                                            <li className="item">
                                                <a href="customer-details.shtml" className="title">Customer Details</a>
                                            </li>
                                            <li className="item">
                                                <a href="https://www.amada.com/" target="_blank" className="title">Amada Worldwide</a>
                                            </li>
                                            <li className="item">
                                                <a href="csr.shtml" className="title">Corporate Social Responsibility</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item bs-sub-menu typ-mega-menu">
                        <a href="#" className="nav-link mb-sub-menu-title">products</a>
                        <div className="menu-wrap mb-sub-menu-body">
                            <ul className="quicklink-item-wrap top">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">
                                            <a href="laser-machines.shtml">laser machines</a></h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="laser-machines-ventis-aj-product-details.shtml" className="link">VENTIS-AJ series</a>
                                            </li>
                                            <li className="item">
                                                <a href="laser-machines-ensis-aj-product-details.shtml" className="link">ENSIS-AJ series</a>
                                            </li>
                                            <li className="item">
                                                <a href="laser-machines-ensis-3015-ri-product-details.shtml" className="link">ENSIS-3015 RI</a>
                                            </li>
                                            <li className="item">
                                                <a href="laser-machines-lcg-3015-product-details.shtml" className="link">LCG-3015 AJ II</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">
                                            <a href="combination-machines.shtml">Combination machines</a>
                                        </h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="combination-machines-lc-c1aj-product-details.shtml" className="link">LC-C1AJ series</a>
                                            </li>
                                            <li className="item">
                                                <a href="combination-machines-eml-aj-product-details.shtml" className="link">EML-AJ series</a>
                                            </li>
                                            <li className="item">
                                                <a href="combination-machines-acies-aj-product-details.shtml" className="link">ACIES-AJ series</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">
                                            <a href="punching-machines.shtml">Punching machines</a>
                                        </h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="punching-machines-em-zr-product-details.shtml" className="link">EM-ZR series</a>
                                            </li>
                                            <li className="item">
                                                <a href="punching-machines-em-mii-product-details.shtml" className="link">EM-MII series</a>
                                            </li>
                                            <li className="item">
                                                <a href="punching-machines-ae-nt-product-details.shtml" className="link">AE-NT series</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">
                                            <a href="press-brakes.shtml">Press Brakes</a>
                                        </h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="press-brake-machines-hg-product-details.shtml" className="link">HG Series</a>
                                            </li>
                                            <li className="item">
                                                <a href="press-brake-machines-hg-atc-product-details.shtml" className="link">HG-ATC Series</a>
                                            </li>
                                            <li className="item">
                                                <a href="press-brake-machines-hg-1303rm-product-details.shtml" className="link">HG-1303Rm</a>
                                            </li>
                                            <li className="item">
                                                <a href="press-brake-machines-hrb-product-details.shtml" className="link">HRB Series</a>
                                            </li>
                                            <li className="item">
                                                <a href="press-brake-machines-eg-product-details.shtml" className="link">EG Series</a>
                                            </li>
                                            <li className="item">
                                                <a href="press-brake-machines-rgm2-product-details.shtml" className="link">RGM2 Series</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="quicklink-item-wrap bottom">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">
                                            <a href="automation.shtml">Automation</a>
                                        </h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="automation-rmp-ntk-product-details.shtml" className="link">Takeout Loader (RMP-NTK)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-as-ntk-product-details.shtml" className="link">Takeout Loader (AS-NTK)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-asr-n-product-details.shtml" className="link">Cycle Loader (ASR-N)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-mars-product-details.shtml" className="link">MARS</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-fork-pallet-product-details.shtml" className="link">Fork Pallet Changer (ASF/ASFH)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-pallet-as-product-details.shtml" className="link">Pallet Changer (AS)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-manipulator-product-details.shtml" className="link">Manipulator (MPL)</a>
                                            </li>
                                            <li className="item">
                                                <a href="automation-lst-product-details.shtml" className="link">Shuttle Table (LST)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">Tooling</h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="#" className="link">AITS</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">NEX III</a>
                                            </li>
                                            <li className="item">
                                                <a href="tooling-contouring-product-details.shtml" className="link">Contouring</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">ARFT</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">V-Cut</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">MPT Tapping</a>
                                            </li>
                                            <li className="item">
                                                <a href="tooling-high-speed-product-details.shtml" className="link">High Speed Marking</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Standard</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Special Order</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">AMADA Modular</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Hydraulic Clamping Holder A GRIP</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">AFH</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">Software</h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="software-production-design-product-details.shtml" className="link">VPSS 3i</a>
                                            </li>
                                            <li className="item">
                                                <a href="software-bend-plus-product-details.shtml" className="link">Bend Plus</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Blank Plus</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">AP100 LE</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">SheetWorks for Unfold</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Kaizen</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">Dr. Abe Tube</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">vLot Manager</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">AITS Software</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">PeuWin</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">vFactory</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <h2 className="title mb-accord-title">General fabricating machines</h2>
                                        <ul className="wrap mb-accord-body">
                                            <li className="item">
                                                <a href="fabricating-machine-id-togu-product-details.shtml" className="link">ID-TOGU</a>
                                            </li>
                                            <li className="item">
                                                <a href="fabricating-machine-togu-iii-product-details.shtml" className="link">TOGU III</a>
                                            </li>
                                            <li className="item">
                                                <a href="fabricating-machine-flw-product-details.shtml" className="link">FLW series</a>
                                            </li>
                                            <li className="item">
                                                <a href="fabricating-machine-ylr-product-details.shtml" className="link">YLR series</a>
                                            </li>
                                            <li className="item">
                                                <a href="fabricating-machine-ylm-product-details.shtml" className="link">YLM series</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">ID series</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">TS series</a>
                                            </li>
                                            <li className="item">
                                                <a href="#" className="link">NC Stud welding machine</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item bs-sub-menu">
                        <a href="#" className="nav-link mb-sub-menu-title">services</a>
                        <div className="menu-wrap mb-sub-menu-body">
                            <ul className="quicklink-item-wrap top">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <ul className="wrap">
                                            <li className="item">
                                                <a href="service-support.shtml" className="title">Service Support</a>
                                            </li>
                                            <li className="item">
                                                <a href="service-extended-warranty.shtml" className="title">Service Extended Warranty</a>
                                            </li>
                                            <li className="item">
                                                <a href="service-adss.shtml" className="title">Service ADSS</a>
                                            </li>
                                            {/* <!-- <li className="item">
                                                <a href="faq.shtml" className="title">Service FAQ</a>
                                            </li> --> */}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item bs-sub-menu">
                        <a href="#" className="nav-link mb-sub-menu-title">vocational centre</a>
                        <div className="menu-wrap mb-sub-menu-body">
                            <ul className="quicklink-item-wrap top">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <ul className="wrap">
                                            <li className="item">
                                                <a href="trainingabout.shtml" className="title">About</a>
                                            </li>
                                            <li className="item">
                                                <a href="trainingcourses.shtml" className="title">training courses offered</a>
                                            </li>
                                            <li className="item">
                                                <a href="precision_sheetmetal.shtml" className="title">Precision Sheet Metal Technology Fair</a>
                                            </li>
                                            {/* <!-- <li className="item">
                                                <a href="trainingschedule.shtml" className="title">Schedule</a>
                                            </li> --> */}
                                            <li className="item">
                                                <a href="trainingcontact.shtml" className="title">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="newsevents.shtml" className="nav-link">news &amp; events</a>
                    </li>
                    <li className="nav-item">
                        <a href="careers.shtml" className="nav-link">career</a>
                    </li>
                    <li className="nav-item bs-sub-menu">
                        <a href="#" className="nav-link mb-sub-menu-title">contact</a>
                        <div className="menu-wrap mb-sub-menu-body">
                            <ul className="quicklink-item-wrap top">
                                <li className="quicklink-item">
                                    <div className="mod-quicklink">
                                        <ul className="wrap">
                                            <li className="item">
                                                <a href="contact-us.shtml" className="title">Contact Us</a>
                                            </li>
                                            <li className="item">
                                                <a href="enquiry.shtml" className="title">Enquiry</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bs-side-nav">
                <ul className="nav-list">
                    <li className="nav-item hidden-xs">
                        <div className="mod-social-links">
                            <a href="#" className="icon icon-youtube"><img src="assets/images/youtube.svg"/></a>
                            <a href="#" className="icon icon-linkedin-o"><img src="assets/images/linkedin.svg"/></a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.amada.com/" target="_blank" className="nav-link"><span className="text">in</span><span className="icon icon-globe"></span></a>
                    </li>
                    {/* <!-- <li className="nav-item">
                        <a href="#" className="nav-link"><span className="icon icon-search"></span></a>
                    </li> --> */}
                    <li className="nav-item">
                        <div className="menu-btn js-menu-open">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

)
}
export default Navbar
   