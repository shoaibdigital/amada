import React from 'react'
import {useFormik} from "formik"
import axios from 'axios'
import DatePicker from "react-datepicker"
import {useState,useEffect} from "react"


const initialValues =  {
    name : '',
    email : '',
    address : '',
    city : '',
    phoneNumber: '',
    dateOfBirth:'',
    currentLocation:'',
    mobileNumber:'',
    educationDetails:'',
    workExperience:'',
    maritalStatus:'',
    maxAge: new Date(),
    minAge: new Date()
}

const onSubmit = (values,{resetForm}) =>{
    axios.post("https://strapi.amada.ae/career-forms",values)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    resetForm({values:''})
}



// const onSubmit = values =>{
//     console.log('formData',values)
//     axios.get("https://strapi.amada.ae/career-forms" + 
//     "?name=" + 
//     values.name +
//     "&email=" + 
//     values.email +
//     "&address=" + 
//     values.address +
//     "&city=" + 
//     values.city +
//     "&phoneNumber=" + 
//     values.phoneNumber +
//     "&educationDetails=" + 
//     values.educationDetails +
//     "&dateOfBirth=" + 
//     values.dateOfBirth +
//     "&currentLocation=" + 
//     values.currentLocation +
//     "&mobileNumber=" + 
//     values.mobileNumber +
//     "&workExperience=" + 
//     values.workExperience +
//     "&maritalStatus=" +
//     values.maritalStatus
//     )
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

const validate = values => {
    let errors = {}
    if(!values.name){
        errors.name = "The Name is Required !"
    }
    if(!values.email){
        errors.email = "Email is Required !"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }


    if(!values.address){
        errors.address = "Address is Required !"
    }
    if(!values.city){
        errors.city = "City is Required !"
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Phone Number is Required !"
    }else if (values.phoneNumber.toString().length < 10 ) {
        errors.phoneNumber = 'Invalid Phone Number !'
    }


    if(!values.educationDetails){
        errors.educationDetails = "Education details are Required !"
    }

    return errors
}


function CareerForm() {
 
    

// const [selectedDate,setSelectedDate] = useState(null)


const formik = useFormik({ initialValues, onSubmit, validate})

// console.log("values",formik.values)

const handleName= (e) => {
    let val = e.target.value
        if(!/[0-9]/i.test(val)){
        formik.setFieldValue("name", val)
    }
}


const handleNumber= (e) => {
    let val = e.target.value
        if(!/[a-z]/i.test(val)){
        formik.setFieldValue("phoneNumber", val)
    }
}


const handleMobile = (e)=>{
    let val = e.target.value
    if(!/[a-z]/i.test(val)){
    formik.setFieldValue("mobileNumber", val)
}
}

const handleMaxDate = (e)=>{

}




// const handleDate = (e)=>{
//     let val = e.target.value
//     if(!/[a-z]/i.test(val)){
//     formik.setFieldValue("dateOfBirth", val)
//  }
// }

// const handleReset = (values,{resetForm})=>{
//   resetForm({formik.values:""})
// }

// let min = new Date()+ 18
// let max = new Date().getFullYear() + 100

// console.log(min)




    return (
        <>
            <div className="bs-breadcrum">
                <div className="container">
                    <ul className="list">
                        <li className="item"><a href="#" className="link">amada</a></li>
                        {/* <!-- <li className="item"><a href="#" className="link">about us</a></li> --> */}
                        <li className="item">careers</li>
                    </ul>
                </div>
            </div>
            <section>
                <div className="bs-section">
                    <div className="container">
                        <div className="sec-cont">
                            <ul className="bs-chain-info typ-img-lg">
                                <li className="item">
                                    <div className="bs-img-desc">
                                        <div className="left-side">
                                            <h2 className="title">Work with US</h2>
                                            <div className="img-wrap">
                                                <img className="lozad" src={require("../assets/images/career.jpg")}/>
                                            </div>
                                            <div className="sec-desc">
                                                <p>AMADA India is a wholly owned subsidiary of Amada Co. Ltd. Japan. We are one of the leading supplier of metal working machinery in India.</p>
                                                <p>We are looking for bright & proactive engineers for below roles.</p>
                                                <ul className="mod-list typ-main">
                                                    <li className="item">Sales Engineers</li>
                                                    <li className="item">Service Engineers</li>
                                                    <li className="item">Customer Support Engineers – Software.</li>
                                                </ul>
                                                <p>Please submit your resume @ <a href="mailto:info@amadaindia.co.in">info@amadaindia.co.in</a></p>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <div className="img-wrap">
                                                <img className="lozad" src={require("../assets/images/career.jpg")}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bs-section">
                    <div className="container">
                        <div className="sec-head">
                            <h2 className="sec-title">drop a resume</h2>
                        </div>
                        <div className="sec-cont">
                            <form onSubmit={formik.handleSubmit} className="lyt-form">
                                <div className="bs-form">
                                    <div className="form-wrap">
                                        <ul className="row">
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label typ-req" htmlFor='name'>Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter Name" name='name' onChange={handleName} value={formik.values.name} onBlur={formik.handleBlur} />
                                                    {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label typ-req" htmlFor='email'>Email</label>
                                                    <input type="text" className="form-control" placeholder="Enter Email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}  />
                                                    {formik.touched.email && formik.errors.email ? <p className='error'>{formik.errors.email}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='dateOfBirth'>Date of Birth</label>
                                                    <DatePicker 
                                                    selected={formik.values.dateOfBirth} 
                                                    onChange={date => formik.setFieldValue("dateOfBirth",date)} 
                                                    placeholderText='DD/MM/YYYY'
                                                     className="form-control" 
                                                     name='dateOfBirth'
                                                    // minDate={minAge}
                                                    // maxAge = {maxAge}   
                                                     />
                                                    {/* <input className="form-control" placeholder="DD/MM/YYYY" name='dateOfBirth' onChange={handleDate} value={formik.values.dateOfBirth} /> */}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='maritalStatus'>Marital Status</label>
                                                    <div className="radio-wrap">
                                                        <div className="bs-radio">
                                                            <input type="radio" name="maritalStatus" id="married"  value="married"  onChange={formik.handleChange}/>
                                                            <label htmlFor="married"><span className="icon icon-radio-uncheck"></span> Married</label>
                                                        </div>
                                                        <div className="bs-radio">
                                                            <input type="radio" name="maritalStatus" id="single"   value="single" onChange={formik.handleChange} />
                                                            <label htmlFor="single"><span className="icon icon-radio-uncheck"></span> Single</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label typ-req" htmlFor='address'>Address</label>
                                                    <textarea className="form-control" rows="4" cols="50" placeholder="Enter Address" name='address' onChange={formik.handleChange} value={formik.values.address} onBlur={formik.handleBlur} ></textarea>
                                                    {formik.touched.address && formik.errors.address ? <p className='error'>{formik.errors.address}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label typ-req" htmlFor='city'>City</label>
                                                    <input type="text" className="form-control" placeholder="Enter City Name" name='city' onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}  />
                                                    {formik.touched.city && formik.errors.city ? <p className='error'>{formik.errors.city}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='currentLocation'>Current Location</label>
                                                    <input type="text" className="form-control" placeholder="Enter Current Location" name='currentLocation' onChange={formik.handleChange} value={formik.values.currentLocation} />
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label typ-req" htmlFor='phoneNumber'>Phone Number</label>
                                                    <input type="text" className="form-control" maxLength={9} placeholder="Enter Phone Number" name='phoneNumber' onChange={handleNumber} value={formik.values.phoneNumber} onBlur={formik.handleBlur} />
                                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className='error'>{formik.errors.phoneNumber}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='mobileNumber'>Mobile Number</label>
                                                    <input type="text" className="form-control" placeholder="Enter Mobile Number" name='mobileNumber' onChange={handleMobile} value={formik.values.mobileNumber} />
                                                </div>
                                            </li>
                                            <li className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='educationDetails'>Educational Details</label>
                                                    <textarea className="form-control" rows="4" cols="50" placeholder="Enter Educational Details" name='educationDetails' onChange={formik.handleChange} value={formik.values.educationDetails} onBlur={formik.handleBlur} ></textarea>
                                                    {formik.touched.educationDetails && formik.errors.educationDetails? <p className='error'>{formik.errors.educationDetails}</p>:null}
                                                </div>
                                            </li>
                                            <li className="col-md-12 col-xs-12">
                                                <div className="form-group">
                                                    <label className="field-label" htmlFor='workExperience'>Work Experience</label>
                                                    <textarea className="form-control" rows="4" cols="50" placeholder="Enter Work Experience" name='workExperience' onChange={formik.handleChange} value={formik.values.workExperience}></textarea>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="form-action">
                                        <button className="bs-btn btn-default" type="submit">submit</button>
                                        <button className="bs-btn btn-icon-link" type="reset" onClick={ e => formik.resetForm()} >reset</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerForm
