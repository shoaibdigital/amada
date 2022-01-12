import React from 'react'
import CareerForm from '../Components/CareerForm'
import CareerFormBanner from '../Components/CareerFormBanner'

function CareerPage() {
    return (
        <div className="main lyt-content js-bg">
            <CareerFormBanner/>
            <CareerForm/>
        </div>
    )
}

export default CareerPage
