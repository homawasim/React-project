import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../../Assets/breadcrum_arrow.png'

const BreadCrum = ({ product }) => {
    return (
        <>
            <div className='breadcrum'>
                <span> HOME </span>
                <img src={arrow_icon} alt='' />
                <span>SHOP</span>
                <img src={arrow_icon} alt="" />
                <span>{product.Category}</span>
                <img src={arrow_icon} alt="" />
                <span>{product.name}</span>
            </div>
        </>
    )
}

export default BreadCrum